import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreProductsComponent } from './products/store-products/store-products.component';

const routes: Routes = [
  {path: 'products', component: StoreProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
