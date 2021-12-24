import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductsModel } from './products.model';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {

  //Arrays, Objects, & string  
  allProducts : ProductsModel[] = [];
  productObject   : ProductsModel = new ProductsModel();
  formValue      !: FormGroup;
  errorProductMsg : string = '';
  
  //Array for Form Fields to add new Product
  newProduct  : ProductsModel = {
    productId          : 0,
    productSku         : "",
    productName        : "",
    productDescription : "",
    productCategory    : "",
    productCost        : 0.0,
    productQty    : 0,
    productRemoved     : false,
    imageUrl           : ""
  }

  constructor( 
    private router: Router,
    private formbuilder: FormBuilder,
    private productService : ProductsService) { }

  ngOnInit(): void {
    //add code for the update

    this.loadProducts();
  }

  //Load all all Products
  loadProducts(){
    this.productService.getAllProductsService().subscribe(
      (response) => {
        this.allProducts = response;
         //-- For Testing Remove later
         console.log("James testing");
         console.log(response);
      },
      (error)=> {
        this.errorProductMsg = "Unable to get allProducts - Try later";
        console.log(this.errorProductMsg);
      }
    )
  }

  //-----Example A function to search product(s) on sale
  productOnSale(){
    //do something or get by a speciific discount/sale endpoint 
   
  }

}
