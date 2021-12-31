import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductAndDiscount} from "../product-and-discount.model";

@Injectable({
  providedIn: 'root'
})
export class ProductAndDiscountService {

  baseUrl = "http://localhost:7777/api/product-discount";

  constructor(private http: HttpClient) { }

  getProductAndDiscountService(productId: number): Observable<ProductAndDiscount> {
    return this.http.get<ProductAndDiscount>(this.baseUrl + "/" + productId);
  }

}
