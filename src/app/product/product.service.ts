import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product } from './store-product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //products endpoints
  productsUrl = "http://localhost:7777/api/products";

  // add other endpoints below if needed

  constructor(private http: HttpClient) { }

   //add Product
   addProductsService(newProduct : Product) : Observable<Product>{
    return this.http.post<Product>(this.productsUrl, newProduct);
  }

  //Update a product
  updateProductsService(updateProd : Product) : Observable<Product>{
    return this.http.put<Product>(this.productsUrl+"/"+updateProd.productId,updateProd);
  }

  //get all Products from DB table
  getAllProductsService() : Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl);
  }
  //Retrieve one Product
  getOneProductsService(productId : number) : Observable<Product>{
    return this.http.get<Product>(this.productsUrl+"/"+productId);
  }

   //Retrieve one Product
   deleteProductsService(productId : number) : Observable<Product>{
    return this.http.delete<Product>(this.productsUrl+"/"+productId);
  }

  //------Will add more later for custom endpoints 

}
