import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { OrderItem } from '../common/orderItem';
import { Orders } from '../common/orders';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: OrderItem[] = [];
  cartSubject = new BehaviorSubject<OrderItem[]>([]);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  private baseUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {}

  addToCart(orderItem: OrderItem) {
    const inCart = this.cartItems.find(
      (item) => item.mangaId === orderItem.mangaId
    );

    if (inCart) {
      inCart.quantity++;
    } else {
      this.cartItems.push(orderItem);
    }
    this.total();
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(manga_id: number) {
    const inCart = this.cartItems.find((item) => item.mangaId === manga_id);
    if (inCart) {
      if (inCart.quantity > 1) inCart.quantity--;
      else {
        this.cartItems.splice(this.cartItems.indexOf(inCart), 1);
      }
    }
    this.total();
    this.cartSubject.next(this.cartItems);
  }

  total() {
    let totalp: number = 0;
    let totalq: number = 0;

    for (let item of this.cartItems) {
      totalp += item.quantity * item.unitPrice;
      totalq += item.quantity;
    }

    this.totalPrice.next(totalp);
    this.totalQuantity.next(totalq);
  }

  postOrder(purchase: Purchase) {
    const response = this.httpClient.post<Purchase>(
      this.baseUrl + 'orders',
      purchase
    );
    return response;
  }
}
