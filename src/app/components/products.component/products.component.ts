import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../product.component/product.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {

  myShoppingCart: Product[] = []

  total = 0

  products: Product[] = [
    { id: "ID_1", name: "Moto 110", image: "https://picsum.photos/id/1011/300/200", price: 1400000 },
    { id: "ID_2", name: "Honda Wave", image: "https://picsum.photos/id/1012/300/200", price: 1600000 },
    { id: "ID_3", name: "Yamaha FZ", image: "https://picsum.photos/id/1015/300/200", price: 2100000 },
    { id: "ID_4", name: "Kawasaki Ninja", image: "https://picsum.photos/id/1016/300/200", price: 7200000 },
    { id: "ID_5", name: "BMW GS", image: "https://picsum.photos/id/1020/300/200", price: 15000000 },
    { id: "ID_6", name: "Suzuki 125", image: "https://picsum.photos/id/1024/300/200", price: 1800000 },
    { id: "ID_7", name: "Motomel Blitz", image: "https://picsum.photos/id/1025/300/200", price: 1200000 },
    { id: "ID_8", name: "Zanella ZB", image: "https://picsum.photos/id/1031/300/200", price: 1300000 },
    { id: "ID_9", name: "Corven Energy", image: "https://picsum.photos/id/1033/300/200", price: 1250000 },
    { id: "ID_10", name: "Gilera Smash", image: "https://picsum.photos/id/1035/300/200", price: 1350000 },
    { id: "ID_11", name: "Honda XR", image: "https://picsum.photos/id/1037/300/200", price: 2600000 },
    { id: "ID_12", name: "Yamaha R3", image: "https://picsum.photos/id/1040/300/200", price: 5000000 },
    { id: "ID_13", name: "KTM Duke", image: "https://picsum.photos/id/1043/300/200", price: 5500000 },
    { id: "ID_14", name: "Benelli TNT", image: "https://picsum.photos/id/1050/300/200", price: 4800000 },
    { id: "ID_15", name: "Harley Davidson", image: "https://picsum.photos/id/1060/300/200", price: 12000000 }
  ];

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product)
    this.total = this.myShoppingCart.reduce((sum,item) => sum + item.price,0)
  }
}
