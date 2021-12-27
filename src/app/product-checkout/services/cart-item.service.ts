import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartItem} from "../cart-item";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class CartItemService {

  baseUrl = "http://localhost:7777/api/cart-item";

  constructor(private http: HttpClient) { }

  addNewItemService(item: CartItem): Observable<CartItem> | null {
    return null;
  }

  updateItemService(item: CartItem): Observable<CartItem> | null {
    return null;
  }

  removeItemService(item: CartItem): Observable<CartItem> | null {
    return null;
  }


}


