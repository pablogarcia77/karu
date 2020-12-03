import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';
import { Pedido } from 'src/app/models/pedido';
import { DetalleService } from 'src/app/services/detalle.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
  providers: [PedidoService,DetalleService]
})
export class ListaPedidosComponent implements OnInit {

  public tienePedidos: boolean;
  public pedidos: Pedido[];
  public detalles: Detalle[];
  public total: number[] = [];

  constructor(
    private _pedidosService: PedidoService,
    private _detalleService: DetalleService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['negocio'];
      console.log('idComercio: ' + id);
      
      this._pedidosService.getPedidosComercio(id).subscribe(
        response => {
          if(response){
            this.pedidos = response;
            console.log(this.pedidos);
          }else{
            this.tienePedidos = false;
          }
        },
        error => {
          console.log(error);
        }
      )

      this._detalleService.getDetalleComercio(id).subscribe(
        response => {
          if(response){
            this.detalles = response;
            console.log(this.detalles);
            this.total.push(this.detalles.reduce(
              (acc,obj) => acc + (obj.subtotal * 1),0
            ));
            console.log(this.total);
            
          }
        },
        error => {
          console.log(error);
        }
      )
    })
    setTimeout(
      function(){ 
      location.reload(); 
    }, 30000);
  }

  getSum(index: number){
    let sum = 0;
    for(let i = 0; i< this.detalles.length ; i++){
      sum += (this.detalles[i].subtotal * 1);
    }
    return sum;
  }

}
