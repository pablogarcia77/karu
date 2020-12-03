import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Global } from './global';

@Injectable()
export class DetalleService{

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url + 'detalles.php';
    }

    getAllDetalles():Observable<any>{
        return this._http.get(this.url);
    }

    getDetalle(idDetalle):Observable<any>{
        return this._http.get(this.url + '?id_detalle=' + idDetalle);
    }

    getDetallePedido(idPedido):Observable<any>{
        return this._http.get(this.url + '?id_pedido=' + idPedido );
    }

    getDetalleComercio(idComercio):Observable<any>{
        return this._http.get(this.url + '?id_comercio=' + idComercio);
    }

    setDetalle(idComercio,idPedido,mesa:number,productos:any){

        const body = { 
            id_producto: 1,
            cantidad: 2,
            subtotal: 55,
            id_pedido: 2
        };
        const fd = new FormData();
        

        productos.forEach(producto => {
            fd.append('id_producto',producto.id_producto.toString());
            fd.append('cantidad',producto.cantidad.toString());
            fd.append('subtotal',(producto.cantidad * producto.precio).toString());
            fd.append('id_pedido',idPedido);
            fd.append('id_comercio',idComercio);
            this._http.post(this.url,fd).subscribe(
                data => {
                    console.log(data);
                }
            )
        });

        // Solo lo pude hacer andar en produccion, en dev no :(
        // Los archivos del APIREST tienen que estar en el mismo
        // Host y puerto que el Front, sino no funca!!!
        // Enviar FormData sin Content-Type sino tampoco funca >:v
        // 4:46 por fin lo pude hacer andar, ahora a mimir
        
        
    }
}