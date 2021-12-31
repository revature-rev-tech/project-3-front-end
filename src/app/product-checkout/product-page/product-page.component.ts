import { Component, OnInit } from '@angular/core';
import { ProductAndDiscount } from '../product-and-discount.model';
import { ProductAndDiscountService } from '../services/product-and-discount.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  ProductAndDiscount: ProductAndDiscount = new ProductAndDiscount();
  constructor(private productAndDiscountService: ProductAndDiscountService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productAndDiscountService.getProductAndDiscountService(1).subscribe({
      next: response => {
        this.ProductAndDiscount = response;


      },
      error: error => {
        console.log(error);
      }
    });
  }


}
