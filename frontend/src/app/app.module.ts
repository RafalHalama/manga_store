import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaService } from './services/manga.service';
import { SearchComponent } from './components/search/search.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartDetailsComponent } from './components/shopping-cart-details/shopping-cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { CartService } from './services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
@NgModule({
  declarations: [
    AppComponent,
    MangaListComponent,
    SearchComponent,
    CategoryListComponent,
    MangaDetailsComponent,
    ShoppingCartComponent,
    ShoppingCartDetailsComponent,
    CheckoutComponent,
    RedirectComponent,
    LoginComponent,
    RegisterComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [MangaService, CartService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
