import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImgComponent } from '../img/img.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  imports: [ImgComponent,CommonModule, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() addedProduct = new EventEmitter<Product>()

  onAddToCart(){
    this.addedProduct.emit(this.product)
  }
}
