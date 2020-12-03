import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Comercio } from '../models/comercio';
import { Global } from './global';

@Injectable()
export class ComercioService{

    public url: string;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    getComercios():Observable<any>{
        return this._http.get(this.url + 'comercios.php')
    }

    getComercio(id):Observable<any>{
        return this._http.get(this.url + 'comercios.php?id=' + id)
    }

    getComercioUsuario(idComercio,idUsuario):Observable<any>{
        return this._http.get(this.url + 'comercios.php?id=' + idComercio + '&idUsuario=' + idUsuario);
    }

    getComerciosDelUsuario(idUsuario):Observable<any>{
        return this._http.get(this.url + 'comercios.php?idUsuario=' + idUsuario);
    }
}