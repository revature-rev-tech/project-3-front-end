import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product} from './product.model';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {
  //Arrays, Objects, & string  
  allProducts : Product[] = [];
  productObject   : Product = new Product();
  formValue      !: FormGroup;
  errorProductMsg : string = '';
  
  //Array for Form Fields to add new Product
  newProduct  : Product = {
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
    private productService : ProductService) { }

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
