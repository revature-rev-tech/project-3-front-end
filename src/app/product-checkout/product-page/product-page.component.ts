import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../users/auth.service';
import { User } from 'src/app/users/user.model';
import { ProductAndDiscount } from '../product-and-discount.model';
import { CartAndItemsService } from '../services/cart-and-items.service';
import { CartItemService } from '../services/cart-item.service';
import { ProductAndDiscountService } from '../services/product-and-discount.service';
import { CartAndItems } from '../cart-and-items.model';
import { CartItem } from '../cart-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {
  productAndDiscount: ProductAndDiscount = new ProductAndDiscount();
  user: User = new User();
  cartAndItems: CartAndItems = new CartAndItems();
  item: CartItem = new CartItem();
  productId: number = 0;

  constructor(private productAndDiscountService: ProductAndDiscountService,
              private cartItemService: CartItemService,
              private cartAndItemsService: CartAndItemsService,
              private authService: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // let pId: string = this.activatedRoute.snapshot.paramMap.get("productId") == null ? "" :  this.activatedRoute.snapshot.paramMap.get("productId");
    let param = this.activatedRoute.snapshot.paramMap.get("productId");
    this.loadData();
  }
  loadData() {
    this.user = this.authService.retrieveUser();
    this.productAndDiscountService.getProductAndDiscountService(this.productId).subscribe({
      next: response => {
        this.productAndDiscount = response;
      },
      error: error => {
        console.log(error);
      }
    });
    this.cartAndItemsService.getCartAndItemsWithUserIdService(this.user.userId).subscribe({
      next: response => {
        this.cartAndItems = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  addToCart() {
    this.item.cartId = this.cartAndItems.cartId;
    // this.item.productId = ______;
    this.item.cartQty = 1;
    this.item.cartItemId = -1;
    this.cartItemService.addNewItemService(this.item).subscribe({
      next: response => {
        this.loadData();
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
