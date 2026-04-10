import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {

  private myShoppingCart: Product[] = []

  addProduct(product: Product){
    this.myShoppingCart.push(product)
  }

  getTotal(){
   const total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
   return  total
  }

  getMyShoppinCart(){
    return this.myShoppingCart
  }

}
