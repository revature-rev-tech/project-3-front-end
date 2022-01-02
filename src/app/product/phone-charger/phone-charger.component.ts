import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product, ProductAndDiscount } from '../store-product/product.model';

@Component({
  selector: 'app-phone-charger',
  templateUrl: './phone-charger.component.html',
  styleUrls: ['./phone-charger.component.css']
})
export class PhoneChargerComponent implements OnInit {
  allProducts: Product[] = [];
  allDiscountProducts: ProductAndDiscount[] = [];
  indexArray: number[] = [];
  productObject: Product = new Product();
  formValue      !: FormGroup;
  errorProductMsg: string = '';
  saveIndex: number = 0;
  
  newProduct: Product = {
    productId: 0,
    productSku: "",
    productName: "",
    productDescription: "",
    productCategory: "",
    productCost: 0.0,
    productQty: 0,
    productRemoved: false,
    imageUrl: ""
  }
  
  NewDiscountedProduct: ProductAndDiscount = {
  
    productId: 0,
    productSku: "",
    productName: "",
    productDescription: "",
    productCategory: "",
    productCost: 0.0,
    productQty: 0,
    imageUrl: "",
    productRemoved: false,
    discountId: 0,
    discountDescription: "",
    discountPercentage: 0
  }
  
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private productService: ProductService) { }
  
  ngOnInit(): void {
  
    this.loadDiscountedProducts();
    
  }
  
  loadProducts() {
    this.productService.getAllProductsService().subscribe(
      (response) => {
        for (let index = 0; index < this.allDiscountProducts.length; index++) {
          for (let index2 = 0; index2 < response.length; index2++) {
            if (this.allDiscountProducts[index].productId == response[index2].productId) {
              this.indexArray[this.saveIndex] = index;
              response.splice(index2,1);
            }
          }
        }
        this.allProducts = response;
      },
      (error) => {
        this.errorProductMsg = "Unable to get allProducts - Try later";
        console.log(this.errorProductMsg);
      }
    )
  }
  
  
  loadDiscountedProducts() {
    this.productService.getAllDiscountsProductsService().subscribe(
      (response) => {
        this.allDiscountProducts = response;
        this.loadProducts();
      },
      (error) => {
        this.errorProductMsg = "Unable to get allDiscountProducts - Try later";
        console.log(this.errorProductMsg);
      }
    )
  }
  
  
  productOnSale() {
  
  
  }
}
