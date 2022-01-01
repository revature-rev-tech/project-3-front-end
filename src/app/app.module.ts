import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './product-checkout/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreProductComponent } from './product/store-product/store-product.component';
import { HelloAdminComponent } from './hello/hello-admin/hello-admin.component';
import { HelloCustomerComponent } from './hello/hello-customer/hello-customer.component';
import { AdminComponent } from './users/admin/admin.component';
import { CustomerComponent } from './users/customer/customer.component';
import { LogoutComponent } from './users/logout/logout.component';
import { ProductPageComponent } from './product-checkout/product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { HeaderComponent } from './header/header.component';

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
    CheckoutComponent,
    ProductPageComponent,
    HomeComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
