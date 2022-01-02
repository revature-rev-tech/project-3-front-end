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
import { GamesComponent } from './games/games.component';
import { ComputersComponent } from './product/computers/computers.component';
import { CellPhonesComponent } from './product/cell-phones/cell-phones.component';
import { HeadPhonesComponent } from './product/head-phones/head-phones.component';
import { TelevisionComponent } from './product/television/television.component';
import { PhoneChargerComponent } from './product/phone-charger/phone-charger.component';
import { RemoteControllersComponent } from './product/remote-controllers/remote-controllers.component';
import { MiniFrigesComponent } from './product/mini-friges/mini-friges.component';
import { DeskLampComponent } from './product/desk-lamp/desk-lamp.component';
import { GamePadsComponent } from './product/game-pads/game-pads.component';
import { AirPurifiersComponent } from './product/air-purifiers/air-purifiers.component';


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
    RegisterComponent,
    GamesComponent,
    ComputersComponent,
    CellPhonesComponent,
    HeadPhonesComponent,
    TelevisionComponent,
    PhoneChargerComponent,
    RemoteControllersComponent,
    MiniFrigesComponent,
    DeskLampComponent,
    GamePadsComponent,
    AirPurifiersComponent,
    

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
