import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../product.component/product.component';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, TimeAgoPipe, HighlightDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  loading = true; // 👈 SIMPLE (sin setter ahora)

  today = new Date();
  date = new Date(2026, 1, 1);

  barPorcent = 0;
  barPorcentInterval = 0;
  safetyTimeout = 0; // 🔥 fallback

  startTime = 0;
  MIN_LOADING_TIME = 2000; // 2 segundos

  private storeService = inject(StoreService);
  private productService = inject(ProductsService);
  private cd = inject(ChangeDetectorRef);

  constructor(
  ) {
    this.myShoppingCart = this.storeService.getMyShoppinCart();
    this.total = this.storeService.getTotal();
  }

  ngOnInit(): void {
    this.startTime = Date.now(); // 🔥 guardamos inicio
    this.startLoadingBar();

    this.safetyTimeout = setTimeout(() => {
      this.finishLoading();
    }, 5000);

    this.productService.getAllProducts()
      .subscribe({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next: (res: any) => {
          this.products = res.products;
          this.finishLoadingWithDelay(); // 👈 usamos este
        },
        error: () => {
          this.products = [];
          this.finishLoadingWithDelay(); // 👈 también acá
        }
      });
  }

  ngOnDestroy(): void {
    this.clearAllTimers();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  // 🚀 arranca animación
  startLoadingBar() {
    this.barPorcent = 0;

    this.barPorcentInterval = setInterval(() => {
      if (this.barPorcent < 90) {
        this.barPorcent += 1;
      }
      this.cd.detectChanges();
    }, 100);
  }

  // 🧠 termina TODO correctamente
  finishLoading() {
    this.loading = false;

    clearTimeout(this.safetyTimeout);

    if (this.barPorcentInterval) {
      clearInterval(this.barPorcentInterval);
    }

    this.barPorcent = 100;
    this.cd.detectChanges();
  }
  
  finishLoadingWithDelay() {
    const elapsed = Date.now() - this.startTime;

    const remaining = this.MIN_LOADING_TIME - elapsed;

    if (remaining > 0) {
      setTimeout(() => {
        this.finishLoading();
      }, remaining);
    } else {
      this.finishLoading();
    }
  }

  clearAllTimers() {
    if (this.barPorcentInterval) {
      clearInterval(this.barPorcentInterval);
    }

    if (this.safetyTimeout) {
      clearTimeout(this.safetyTimeout);
    }
  }
}