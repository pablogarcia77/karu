import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercio } from 'src/app/models/comercio';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion';
import { ComercioService } from 'src/app/services/comercio.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  providers: [AutenticacionService,ComercioService]
})
export class PanelComponent implements OnInit {

  public titulo: string;
  public usuario;
  public comercios: Comercio[];
  public opciones: boolean = false;

  constructor(
    private _autenticacionService: AutenticacionService,
    private _comercioService: ComercioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {

    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    this._route.params.subscribe(params => {
      let idUsuario = params['usuario'];
      if(this.usuario[0].id_usuario == idUsuario){
        this._comercioService.getComerciosDelUsuario(idUsuario).subscribe(
          response => {
            // this.comercios = response;
            localStorage.setItem('currentComercios',JSON.stringify(response));
          },
          error => {
            console.log(error);
          }
        )
      }else{
        this._router.navigate(['/panel/' + this.usuario[0].id_usuario]);
      }
    })
  }

  logOut(){
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentComercios');
    this._router.navigate(['/home']);
  }

  openOptions(){
    this.opciones = !this.opciones;
  }

  goNegocio(id){
    this._router.navigate(['/panel/' + this.usuario[0].id_usuario + '/minegocio/' + id]);
  }

}
