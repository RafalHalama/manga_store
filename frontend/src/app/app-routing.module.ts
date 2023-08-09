import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';
import { ShoppingCartDetailsComponent } from './components/shopping-cart-details/shopping-cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/authguard';

const routes: Routes = [
  { path: '', redirectTo: 'manga', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'manga',
    component: MangaListComponent,
  },
  { path: 'manga/:id', component: MangaDetailsComponent },
  { path: 'category/:id', component: MangaListComponent },
  { path: 'search/:value', component: MangaListComponent },
  {
    path: 'shoppingcart',
    component: ShoppingCartDetailsComponent,
    canActivate: [AuthGuard],
    data: { requiredRoles: ['ROLE_USER'] },
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    data: { requiredRoles: ['ROLE_USER'] },
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    canActivate: [AuthGuard],
    data: { requiredRoles: ['ROLE_USER'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
