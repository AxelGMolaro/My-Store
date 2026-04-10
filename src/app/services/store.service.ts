import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  private myShoppingCart: Product[] = []
  private myCart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  myCart$ = this.myCart.asObservable();

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getTotal(){
   const total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
   return  total
  }

  getMyShoppinCart(){
    return this.myShoppingCart
  }

}
