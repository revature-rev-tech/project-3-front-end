import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HelloAdminComponent } from './hello/hello-admin/hello-admin.component';
import { HelloCustomerComponent } from './hello/hello-customer/hello-customer.component';
import { StoreProductComponent } from './product/store-product/store-product.component';
import { AdminGuard } from './users/admin.guard';
import { AdminComponent } from './users/admin/admin.component';
import { CustomerComponent } from './users/customer/customer.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { CheckoutComponent } from './product-checkout/checkout/checkout.component';


const routes: Routes = [
<<<<<<< HEAD
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard] },
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard] },
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard] },
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard] },
  { path: "checkout", component: CheckoutComponent },
=======
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent},
  { path: 'product', component: StoreProductComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard]},
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard]},
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard]},
>>>>>>> a53744ac087b93f54a098354ff51c5c8dd1d28f8
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
export class AppRoutingModule {
}
