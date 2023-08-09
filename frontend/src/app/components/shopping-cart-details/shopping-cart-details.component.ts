import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/common/orderItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.css'],
})
export class ShoppingCartDetailsComponent implements OnInit {
  cartItems: OrderItem[] = [];
  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartSubject
      .asObservable()
      .subscribe((data) => (this.cartItems = data));
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
  }

  incrementQuantity(orderItem: OrderItem) {
    this.cartService.addToCart(orderItem);
  }
  decrementQuantity(id: number) {
    this.cartService.removeFromCart(id);
  }
}
