import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/productos';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-micomercio',
  templateUrl: './micomercio.component.html',
  styleUrls: ['./micomercio.component.css'],
  providers: [ProductoService]
})
export class MicomercioComponent implements OnInit {

  public productos: Producto[];
  public categorias: Categoria[];
  public id;

  public editable: boolean = false;;

  constructor(
    private _productoService: ProductoService,
    private _categoriaService: CategoriaService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      this.id = params['negocio'];
      this._productoService.getProductosComercio(this.id).subscribe(
        response => {
          if(response){
            this.productos = response;
          }
        },
        error => {
          console.log(error);
        }
      )
      this._categoriaService.getCategoriaComercio(this.id).subscribe(
        response => {
          this.categorias = response;
        },
        error => {
          console.log(error);
        }
      )
    })


  }

  editar(producto){
    console.log('DATOS NUEVOS');
    this.editable = !this.editable;
    
    console.log('se enviaron datos');
    console.log(producto);
    
  }

}
