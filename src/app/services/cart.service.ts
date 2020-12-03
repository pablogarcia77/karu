import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IItem } from '../interfaces/items.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<IItem>>(null);

  public currentDataCart$ = this.cart.asObservable();

  constructor() { }

  public changeCart(newData: IItem) {
    // Obtengo el valor actual del carrito
    let listCart = this.cart.getValue();
    // Si no es primer producto
    if (listCart) {
      // Busco si ya cargue producto
      let objIndex = listCart.findIndex((
        obj => obj.id_producto == newData.id_producto
      ));
      // Si ya se cargo se aumenta la cantidad
      if(objIndex != -1){
        listCart[objIndex].cantidad++;
      }else{
        // Si es primer producto se agrega directamente al carrito
        listCart.push(newData);        
      }
    }else{
      // Si es el primer elemento lo inicializamos
      listCart = [];
      listCart.push(newData);
    }
    // Envio el valor de todos los observers que estan escuchando al observable
    this.cart.next(listCart);
  }

  public removeElementCart(newData:IItem){
    // Obtengo valor actual del carrito
    let listCart = this.cart.getValue();
    // Busco el producto a quitar
    let objIndex = listCart.findIndex((
      obj => obj.id_producto == newData.id_producto
    ));
    if(objIndex != -1){
      // Seteo la cantidad en 1
      listCart[objIndex].cantidad = 1;
      // Quito el producto del carrito
      listCart.splice(objIndex,1);
    }
    // Envio el valor de todos los observas que estan escuchando los observables
    this.cart.next(listCart);
  }

  public removeOneElementCart(newData:IItem){
    // Obtengo valor actual del carrito
    let listCart = this.cart.getValue();
    // BUsco el producto a quitar
    let objIndex = listCart.findIndex((
      obj => obj.id_producto == newData.id_producto
    ));
    if(objIndex != -1){
      // Resto 1 al producto
      listCart[objIndex].cantidad--;
    }
    // Envio el valor de todos los observer que estan esuchando los observables
    this.cart.next(listCart);
  }

  public vaciarCarrito(){
    this.cart.next(null);
  }


}
