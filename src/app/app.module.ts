import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreProductComponent } from './product/store-product/store-product.component';
import { HelloAdminComponent } from './hello/hello-admin/hello-admin.component';
import { HelloCustomerComponent } from './hello/hello-customer/hello-customer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './users/admin/admin.component';
import { CustomerComponent } from './users/customer/customer.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ProductPageComponent } from './product-checkout/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    StoreProductComponent,
    HelloAdminComponent,
    HelloCustomerComponent,
    HeaderComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    LogoutComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
