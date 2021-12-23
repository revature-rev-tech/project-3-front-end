import { Injectable } from '@angular/core';
import {ProductsModel} from './store-products/products.model';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //products endpoints
  productsUrl = "http://localhost:7777/api/products";

  // add other endpoints below if needed

  constructor(private http: HttpClient) { }

  //add Product
  addProductsService(newProduct : ProductsModel) : Observable<ProductsModel>{
    return this.http.post<ProductsModel>(this.productsUrl, newProduct);
  }

  //Update a product
  updateProductsService(updateProd : ProductsModel) : Observable<ProductsModel>{
    return this.http.put<ProductsModel>(this.productsUrl+"/"+updateProd.productId,updateProd);
  }

  //get all Products from DB table
  getAllProductsService() : Observable<ProductsModel[]>{
    return this.http.get<ProductsModel[]>(this.productsUrl);
  }
  //Retrieve one Product
  getOneProductsService(productId : number) : Observable<ProductsModel>{
    return this.http.get<ProductsModel>(this.productsUrl+"/"+productId);
  }

   //Retrieve one Product
   deleteProductsService(productId : number) : Observable<ProductsModel>{
    return this.http.delete<ProductsModel>(this.productsUrl+"/"+productId);
  }

  //------Will add more later for custom endpoints 

}
