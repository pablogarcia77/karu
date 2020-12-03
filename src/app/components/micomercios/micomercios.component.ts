import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micomercios',
  templateUrl: './micomercios.component.html',
  styleUrls: ['./micomercios.component.css']
})
export class MicomerciosComponent implements OnInit {
  
  public comercios;
  public usuario;

  constructor() { }

  ngOnInit(): void {
    this.comercios = JSON.parse(localStorage.getItem('currentComercios'));
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.usuario[0]);
  }

}
