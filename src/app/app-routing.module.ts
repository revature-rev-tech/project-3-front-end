import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HelloAdminComponent } from './hello/hello-admin/hello-admin.component';
import { HelloCustomerComponent } from './hello/hello-customer/hello-customer.component';
import { ProductPageComponent } from "./product-checkout/product-page/product-page.component";
import { StoreProductComponent } from './product/store-product/store-product.component';
import { AdminGuard } from './users/admin.guard';
import { AdminComponent } from './users/admin/admin.component';
import { CustomerComponent } from './users/customer/customer.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';
import { GamesComponent } from '../app/games/games.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard] },
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard] },
  { path: "admin", component: AdminComponent},
  { path: "games", component: GamesComponent},
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard] },
  { path: "checkout", component: CheckoutComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AdminGuard]},
  { path: 'product', component: StoreProductComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  { path: "product-page", component: ProductPageComponent, canActivate: [AdminGuard] }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

