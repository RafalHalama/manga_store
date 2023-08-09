import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  subscription: Subscription | null = null;
  subscription2: Subscription | null = null;
  email: string | null = null;
  constructor(
    private cartService: CartService,
    private authService: AuthGuardService
  ) {}
  ngOnInit(): void {
    this.subscription = this.cartService.totalPrice.subscribe(
      (data) => (this.totalPrice = data)
    );

    this.subscription2 = this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.authService.email.subscribe((data) => (this.email = data));
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }
}
