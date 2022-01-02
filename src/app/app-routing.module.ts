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
import { ComputersComponent } from './product/computers/computers.component';
import { CellPhonesComponent } from './product/cell-phones/cell-phones.component';
import { HeadPhonesComponent } from './product/head-phones/head-phones.component';
import { TelevisionComponent } from './product/television/television.component';
import { PhoneChargerComponent } from './product/phone-charger/phone-charger.component';
import { RemoteControllersComponent } from './product/remote-controllers/remote-controllers.component';
import { MiniFrigesComponent } from './product/mini-friges/mini-friges.component';
import { DeskLampComponent } from './product/desk-lamp/desk-lamp.component';
import { AirPurifiersComponent } from './product/air-purifiers/air-purifiers.component';
import { GamePadsComponent } from './product/game-pads/game-pads.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "hello-admin", component: HelloAdminComponent, canActivate: [AdminGuard] },
  { path: "hello-customer", component: HelloCustomerComponent, canActivate: [AdminGuard] },
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  { path: "games", component: GamesComponent},
  { path: "computers", component: ComputersComponent},
  { path: "cell-phones", component: CellPhonesComponent},
  { path: "head-phones", component: HeadPhonesComponent},
  { path: "tv", component: TelevisionComponent},
  { path: "phone-chargers", component: PhoneChargerComponent},
  { path: "remote-controllers", component: RemoteControllersComponent},
  { path: "mini-friges", component: MiniFrigesComponent},
  { path: "desk-lamps", component: DeskLampComponent},
  { path: "air-purifiers", component: AirPurifiersComponent},
  { path: "game-pads", component: GamePadsComponent},
  { path: "customer", component: CustomerComponent, canActivate: [AdminGuard] },
  { path: "checkout", component: CheckoutComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
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

