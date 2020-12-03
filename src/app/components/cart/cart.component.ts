import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { IItem } from 'src/app/interfaces/items.interface';
import { DetalleService } from 'src/app/services/detalle.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { DatosService } from 'src/app/services/datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DetalleService,PedidoService]
})
export class CartComponent implements OnInit {

  public items: Array<IItem>
  public precioTotal: number = 0;
  public cantidadTotal: number = 0;
  public aviso: boolean = false;
  public alertNo: boolean = false;
  public mesa: number = 0;
  public escribioMesa: boolean = false;
  public mensajeMesa: boolean = false;
  public mensajeItems: boolean = false;
  public id;

  public titulo: string;
  public openCart = false;

  @Output() cartFlag = new EventEmitter<boolean>();

  constructor(
    private _cartService: CartService,
    private _detalleService: DetalleService,
    private _pedidoService: PedidoService,
    private datos: DatosService,
    private _route: ActivatedRoute,
  ) { 
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      this.id = params['comercio'];
    })

    this._cartService.currentDataCart$.subscribe(
      response => {
        if (response) {
          this.items = response;
          // this.cantidadTotal = response.length;
          this.precioTotal = response.reduce(
            (sum, current) => sum + (current.precio * current.cantidad), 0);
          this.cantidadTotal = response.reduce(
            (total, actual) => total + (1 * actual.cantidad), 0);
        }
      }
    )


    this.datos.customMessage.subscribe(
      msg => this.titulo = msg
    );
  }

  public cart() {
    this.openCart = !this.openCart;
  }

  // Quitar todos los productos de un id
  public remove(producto: IItem) {
    this._cartService.removeElementCart(producto);
  }

  public addCart(producto: IItem){
    this.mensajeItems = false;
    this._cartService.changeCart(producto);
  }

  public cancelPedido(items: Array<IItem>){
    items.splice(0);
    this._cartService.vaciarCarrito();
    this.openCart = !this.openCart;
    this.mensajeMesa = false;
    this.alertNo = false;      
    this.mensajeItems = false;
    this.cantidadTotal = 0;
    this.mesa = 0;
    this.aviso = false;
  }

  // Confirmar pedido
  public confirmPedido(items: Array<IItem>){
    if(!this.aviso && items && this.cantidadTotal != 0 && this.mesa != 0){
      this._cartService.vaciarCarrito();
      this.mensajeMesa = false;
      this.alertNo = false;      
      this.mensajeItems = false;
      // this.cantidadTotal=0;
      this.aviso = true;
      this._pedidoService.setPedido(this.id,this.mesa,this.precioTotal).subscribe(
        response => {
          this._detalleService.setDetalle(this.id,response.id_pedido,this.mesa,items);
        }
      )
      
      setTimeout(
        function(){ 
        location.reload(); 
      }, 1500);
    }else{
      if(this.mesa == 0 && !this.mensajeMesa){
        this.mensajeMesa = true;
        this.mensajeItems = false;
        this.alertNo = false;
      }else{
        if(!this.alertNo){
          this.mensajeItems = true;
          this.mensajeMesa = false;
          // this.mensajeItems = false;
        }else{
          this.mensajeItems = true;
          this.alertNo = true;
          this.mensajeMesa = false;
        }
        
        
      }
    }
    
  }

  // Quitar un producto especifico (cantidad)
  public removeOne(producto: IItem){
    this._cartService.removeOneElementCart(producto);
    if(producto.cantidad == 0){
      this._cartService.removeElementCart(producto);
    }
  }

  public mandarMesa(mesa: number){
    this.mesa = mesa;
    if(this.mesa == 0){
      this.escribioMesa = true;
    }else{
      this.escribioMesa = false;
    }
    
  }

}
