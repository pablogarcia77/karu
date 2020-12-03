import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comercio } from '../models/comercio';
import { Global } from './global';

@Injectable()
export class CategoriaService{

    public url: string;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    getCategoriaComercio(id):Observable<any>{
        return this._http.get(this.url + 'categorias.php?c=' + id)
    }
}