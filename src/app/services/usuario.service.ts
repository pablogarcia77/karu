import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Usuario } from '../models/usuario';
import { Session } from '../models/session';


@Injectable()
export class UsuarioService{

    public url: string;
    public usuario: Usuario;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url + 'login.php';
    }

    getUsuario(usuario: Usuario):Observable<any>{
        const fd = new FormData();
        fd.append('username',usuario.username);
        fd.append('password',usuario.password);
        return this._http.post(this.url,fd);
    }

}