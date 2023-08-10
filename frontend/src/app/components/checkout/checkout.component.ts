import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Orders } from 'src/app/common/orders';
import { OrderItem } from 'src/app/common/orderItem';
import { CartService } from 'src/app/services/cart.service';
import { customEmailValidator } from 'src/app/validators/customEmailValidator';
import { Purchase } from 'src/app/common/purchase';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  email!: String;
  totalPrice: number = 0.0;
  totalQuantity: number = 0;
  constructor(
    private router: Router,
    private cartService: CartService,
    private fb: FormBuilder,
    private authService: AuthGuardService
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, customEmailValidator],
      ],
      street: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.authService.email.subscribe((data) => (this.email = data));
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const orders: Orders = {
        totalQuantity: this.totalQuantity,
        totalPrice: this.totalPrice,
      };

      const purchase: Purchase = {
        orders: orders,
        orderItems: this.cartService.cartItems,
        email: this.email,
      };
      this.cartService.postOrder(purchase).subscribe((response) => {
        this.redirectToCountdown();
      });
    }
  }

  redirectToCountdown() {
    this.cartService.cartItems = [];
    this.cartService.cartSubject.next(this.cartService.cartItems);
    this.cartService.total();
    this.router.navigate(['/redirect']);
  }
}
