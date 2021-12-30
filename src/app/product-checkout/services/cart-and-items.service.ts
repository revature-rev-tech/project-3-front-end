import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CartAndItems} from "../cart-and-items.model";

@Injectable({
  providedIn: 'root'
})
export class CartAndItemsService {

  baseUrl = "http://localhost:7777/api/cart-and-items";

  constructor(private http: HttpClient) { }

  getCartAndItemsService(cartId: number): Observable<CartAndItems>{
    return this.http.get<CartAndItems>(this.baseUrl + "/" + cartId);
  }

  getCartAndItemsService(cartId: number): Observable<CartAndItems>{
    return this.http.get<CartAndItems>(this.baseUrl + "/" + cartId);
  }

}
