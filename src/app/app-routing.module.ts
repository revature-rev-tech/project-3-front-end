import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HelloAdminComponent } from './hello/hello-admin/hello-admin.component';
import { HelloCustomerComponent } from './hello/hello-customer/hello-customer.component';
import { ProductPageComponent } from "./product-checkout/product-page/product-page.component";
import { StoreProductComponent } from './product/store-product/store-product.component';
import { AdminGuard } from './users/admin.guard';
import { AdminComponent } from './users/admin/admin.component';
import { CustomerComponent } from './users/customer/customer.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { CheckoutComponent } from './product-checkout/checkout/checkout.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard] },
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard] },
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard] },
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard] },
  { path: "checkout", component: CheckoutComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: 'product', component: StoreProductComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard] },
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard] },
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard] },
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard] },
  { path: "home", component: HomeComponent },
  { path: "product-page/:productId", component: ProductPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
