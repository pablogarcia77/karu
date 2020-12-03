import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DatosService } from '../../services/datos.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public titulo: string;
  public inFlag: boolean = false;

  constructor(

  ) {
    this.titulo = Global.nombreApp;
  }

  ngOnInit(): void {

  }


  public entrar(){
    this.inFlag = !this.inFlag;   
  }
}
