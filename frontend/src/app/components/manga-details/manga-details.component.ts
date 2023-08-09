import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Manga } from 'src/app/common/manga';
import { OrderItem } from 'src/app/common/orderItem';
import { CartService } from 'src/app/services/cart.service';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.css'],
})
export class MangaDetailsComponent implements OnInit {
  showRemove: boolean = false;
  constructor(
    private mangaService: MangaService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  selectedManga: Manga | null = null;
  subscription: Subscription | null = null;
  ngOnInit(): void {
    this.subscription = combineLatest([
      this.route.params,
      this.cartService.cartSubject,
    ])
      .pipe(
        switchMap(([params, cartItems]) =>
          this.mangaService.getMangaById(params['id']).pipe(
            switchMap((data) => {
              this.selectedManga = data;
              const itemInCart = cartItems.find(
                (item) => item.mangaId === this.selectedManga!.id
              );
              this.showRemove = !!itemInCart;
              return [];
            })
          )
        )
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  addToCart(selectedManga: Manga) {
    const newOrderItem: OrderItem = {
      imageUrl: selectedManga.imageUrl,
      unitPrice: selectedManga.price,
      quantity: 1,
      mangaId: selectedManga.id,
    };
    this.cartService.addToCart(newOrderItem);
  }
  removeFromCart(selectedManga: Manga) {
    this.cartService.removeFromCart(selectedManga.id);
  }
}
