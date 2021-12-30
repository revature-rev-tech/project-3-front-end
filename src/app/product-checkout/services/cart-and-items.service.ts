import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CartAndItems } from "../cart-and-items.model";

@Injectable({
  providedIn: 'root'
})
export class CartAndItemsService {

  baseUrl = "http://localhost:8080/api/test";

  constructor(private http: HttpClient) { }

  getCartAndItemsService(cartId: number): Observable<CartAndItems> {
    return this.http.get<CartAndItems>(this.baseUrl + "/" + cartId);
  }

}
