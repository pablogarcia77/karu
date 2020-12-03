import { Component, enableProdMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from 'src/app/interfaces/items.interface';
import { Categoria } from 'src/app/models/categoria';
import { Comercio } from 'src/app/models/comercio';
import { Producto } from 'src/app/models/productos';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ComercioService } from 'src/app/services/comercio.service';
import { ProductoService } from 'src/app/services/producto.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService,CategoriaService,ComercioService]
})
export class ProductosComponent implements OnInit {

  public productos: Producto[];
  public categorias: Categoria[];
  public comercio: Comercio;

  constructor(
    private _productoService: ProductoService,
    private _categoriaService: CategoriaService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cartService: CartService,
    private _comercioService: ComercioService
  ) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let idcom = params['comercio'];
      this._comercioService.getComercio(idcom).subscribe(
        response => {
          if(response){
            this.comercio = response;
          }
        },
        error => {
          console.log(error);
        }
      )
    })

    this._route.params.subscribe(params => {
      let idc = params['comercio'];
      this._productoService.getProductosComercio(idc).subscribe(
        response => {
          if(response){
            this.productos = response;
            // console.log(response);
          }
        },
        error => {
          console.log(error);
        }
      )
    })

    this._route.params.subscribe(params => {
      let idca = params['comercio'];
      this._categoriaService.getCategoriaComercio(idca).subscribe(
        response => {
          this.categorias = response;
        },
        error => {
          console.log(error);
        }
      )
    })
  }
  // Agregar producto al carrito
  public addCart(product:IItem){
    this._cartService.changeCart(product);
  }
  // Restar cantidad de producto en 1
  public removeOne(producto:IItem){
    this._cartService.removeOneElementCart(producto);
    if(producto.cantidad == 0){
      this._cartService.removeElementCart(producto);
    }
  }


}
