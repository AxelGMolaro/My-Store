import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit{
   activeMenu = false;
   counter = 0;

   private storeService = inject(StoreService)

   ngOnInit(): void {
     this.storeService.myCart$.subscribe(
      products => {
        this.counter = products.length
      }
     )
   }

   toggleMenu() {
    this.activeMenu = !this.activeMenu;
   }
}
