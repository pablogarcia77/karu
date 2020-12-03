import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Global } from '../services/global';

@Injectable()
export class DatosService {
    private message = new BehaviorSubject<string>(Global.nombreApp);

    public customMessage = this.message.asObservable();

    public changeMessage(msg: string): void{
        this.message.next(msg);
    }
}