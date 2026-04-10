import { Component } from '@angular/core';
import { ProductsComponent } from '../../components/products.component/products.component';
import { NavComponent } from '../../components/nav.component/nav.component';

@Component({
  selector: 'app-home.page',
  imports: [ProductsComponent,NavComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  imgParent = "";
  showImage = true;



  imgLoaded(img: string) {
    console.log(img)
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
