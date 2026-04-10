import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImgComponent } from '../img/img.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ImgComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>()

  onAddToCart(){
    this.addedProduct.emit(this.product)
  }
}
