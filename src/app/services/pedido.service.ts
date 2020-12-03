import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PedidoService{

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url + 'pedidos.php';
    }

    getAllPedidos():Observable<any>{
        return this._http.get(this.url);
    }

    getPedido(id):Observable<any>{
        return this._http.get(this.url + '?id_pedido=' + id);
    }

    setPedido(id:number, mesa:number, total:number):Observable<any>{
        const fd = new FormData();
        fd.append('mesa',mesa.toString());
        fd.append('id_comercio',id.toString());
        fd.append('total',total.toString());
        return this._http.post(this.url,fd);
    }

    getPedidosComercio(id:number):Observable<any>{
        return this._http.get(this.url + '?id_comercio=' + id);
    }
}