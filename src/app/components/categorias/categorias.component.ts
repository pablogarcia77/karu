import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { ComercioService } from 'src/app/services/comercio.service';
import { CategoriaService } from '../../services/categoria.service';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [CategoriaService,ComercioService]
})
export class CategoriasComponent implements OnInit {

  public categorias: Categoria[];
  public comercio: ComercioService;
  public message: string;
  public editMessage: string;

  constructor(
    private _categoriaService: CategoriaService,
    private comercioService: ComercioService,
    private _route: ActivatedRoute,
    private _router: Router,
    private datos: DatosService
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params['comercio'];
      this._categoriaService.getCategoriaComercio(id).subscribe(
        response => {
          if (response) {
            this.categorias = response;
          }
          // console.log(response);
        },
        error => {
          console.log(error);
        }
      )
    })

    this._route.params.subscribe(params => {
      let id = params['comercio'];
      this.comercioService.getComercio(id).subscribe(
        response => {
          this.datos.changeMessage(response.razon);
        },
        error => {
          console.log(error);
        }
      )
    })

   
  }


}
