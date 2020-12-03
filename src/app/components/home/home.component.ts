import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercio';
import { DatosService } from '../../services/datos.service';
import { Global } from '../../services/global';
import { ComercioService } from '../../services/comercio.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
// import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ComercioService]
})
export class HomeComponent implements OnInit {
  
  public comercios: Comercio[];
  public usuario;
  
  constructor(
    private _comercioService: ComercioService,
    // private _route: ActivatedRoute,
    // private _router: Router
    private _cartService: CartService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));

    if(this.usuario != null){
      this._router.navigate(['/panel/' + this.usuario[0].id_usuario]);
    }else{

      // Muestro todos los comercios
      this._comercioService.getComercios().subscribe(
        response => {
          if(response){
            this.comercios = response;
            this._cartService.vaciarCarrito();
          }
          // console.log(response);
        },
        error => {
          // console.log(error);
        }
      );
    }
  }

}
