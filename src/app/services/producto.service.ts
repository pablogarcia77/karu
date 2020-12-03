import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class ProductoService{

    public url: string;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    getProductosComercio(id):Observable<any>{
        return this._http.get(this.url + 'productos.php?c=' + id)
    }

    getProductosCategoria(idc, idcat):Observable<any>{
        return this._http.get(this.url + 'productos.php?c=' + idc + '&cat=' + idcat)
    }

    getProducto(idp):Observable<any>{
        return this._http.get(this.url + 'productos.php?p=' + idp)
    }

}