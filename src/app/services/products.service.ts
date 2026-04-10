import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {


  private http = inject(HttpClient);

  getAllProducts() {
    return this.http.get<Product[]>("https://dummyjson.com/products")
  }
}
