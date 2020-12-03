import { Component, OnInit } from '@angular/core';
import { Comercio } from '../../models/comercio';
import { ComercioService } from '../../services/comercio.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css'],
  providers: [ComercioService]
})
export class ComercioComponent implements OnInit {

  public comercios: Comercio[];
  public comercio: Comercio;

  constructor(
    private _comercioService: ComercioService,
    private _route: ActivatedRoute,
    private _router: Router,
    private datosService: DatosService
  ) { }

  ngOnInit(): void {
    this._comercioService.getComercios().subscribe(
      response => {
        if(response){
          this.comercios = response;
          this.datosService.changeMessage(Global.nombreApp);
        }
        // console.log(response);
      },
      error => {
        console.log(error);
      }
    );

  }

}
