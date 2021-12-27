import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductAndDiscount} from "../product-and-discount.model";

@Injectable({
  providedIn: 'root'
})
export class ProductAndDiscountService {

  baseUrl = "http://localhost:7777/api/product-and-discount";

  constructor(private http: HttpClient) { }

  getProductAndDiscountService(): Observable<ProductAndDiscount> | null {
    return null;
  }

}
