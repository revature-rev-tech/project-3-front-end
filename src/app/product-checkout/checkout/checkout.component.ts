import { CartItem } from './../cart-item';
import { Cart } from './../cart.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartAndItems, ItemProductAndDiscount } from '../cart-and-items.model';
import { ProductAndDiscount } from '../product-and-discount.model';
import { CartAndItemsService } from '../services/cart-and-items.service';
import { TransactionService } from '../services/transaction.service';
import { AuthService } from 'src/app/users/auth.service';
import { CartService } from '../services/cart.service';
import { Transaction } from '../transaction.model';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productAndDiscount: ProductAndDiscount = new ProductAndDiscount();
  transaction: Transaction = new Transaction();
  cartAndItems: CartAndItems = new CartAndItems();
  cart: Cart = new Cart();
  totalCost: number = 0
  total: number = 0
  itemNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  errorMsg: string = "";
  displayStyle: string = "";
  itemUpdating: CartItem = new CartItem();
  userId: number = 0;



  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cartAndItemsService: CartAndItemsService, private transactionService: TransactionService,
    private authService: AuthService, private cartService: CartService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.userId = this.authService.retrieveUser().userId;
    this.displayAllCarts()
  }


  displayAllCarts() {
    //var cartId: any = this.activatedRoute.snapshot.paramMap.get("cartId");
    this.cartAndItemsService.getCartAndItemsWithUserIdService(this.userId).subscribe((response) => {
      this.cartAndItems = response;
      this.totalCost = this.getItemsTotal()
      console.log("total = " + (this.totalCost).toFixed(2))
    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
      console.log(error);
    });
  }

  getItemsTotal(): any {
    let total = 0;
    this.cartAndItems.cartItems.forEach((value, index) => {
      total += this.calculateTotalCost(value, this.calculateDiscountedItemCost);
    });
    return total.toFixed(2);
    // this.cartAndItemsId.cartItems.forEach((value, index) => {
    //   console.log("discountPercentage" + value.productAndDiscount.discountPercentage)
    //   console.log("productCost" + value.productAndDiscount.productCost)
    //
    //   if (value.productAndDiscount.discountPercentage < 1.0) {
    //     this.total += value.productAndDiscount.productCost
    //     console.log("my new total = " + this.total.toFixed(2))
    //   } else {
    //     this.total += value.productAndDiscount.productCost - ((value.productAndDiscount.discountPercentage / 100) * value.productAndDiscount.productCost)
    //
    //     console.log("my total = " + this.total.toFixed(2))
    //   }
    // })
    // return this.total
  }

  remove(productId: number) {
    this.cartItemService.removeItemService(productId).subscribe({
      next: response => {
        this.displayAllCarts();
      },
      error: err => {

      }
    })
  }

  changeQuantity(item: ItemProductAndDiscount, event: any) {
    let newItem = new CartItem();
    newItem.cartItemId = item.cartItemId;
    newItem.cartId = item.cartId;
    newItem.productId = item.productId;
    newItem.cartQty = event.value;
    this.cartItemService.updateItemService(newItem).subscribe({
      next: response => {
        this.displayAllCarts();
      },
      error: err => {

      }
    });
  }


  proceedToCheckout() {
    this.cart.cartRemoved = true
    this.cart.cartPaid = true
    this.cartService.updateCartService(this.cart).subscribe((response) => {
      response;
    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
    });
    this.cart.userId = this.cartAndItems.userId
    this.cartService.addCartService(this.cart).subscribe((response) => {
      response;
    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
    });
    this.transaction.transactionId = this.cartAndItems.cartId
    this.transactionService.sendTransaction(this.transaction).subscribe((response) => {
    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
    });
    setInterval(() => {
      this.displayStyle = "none";
      this.router.navigate(['/home']);
    }, 5000);
  }


  ngOnDestroy() {
    clearInterval();
  }

  calculateDiscountedItemCost(product: ProductAndDiscount): number {
    let cost = product.productCost;
    let discountPercentage = product.discountPercentage;
    return cost - (cost * (discountPercentage / 100));
  }
  calculateSingleItemCost(product: ProductAndDiscount): number {
    return product.productCost;
  }

  calculateTotalSavings(product: ProductAndDiscount): number {
    let cost = product.productCost;
    let discountPercentage = product.discountPercentage;
    return cost * (discountPercentage / 100);
  }

  calculateTotalCost(item: ItemProductAndDiscount, calcSingleItem: any) {
    return item.cartQty * calcSingleItem(item.productAndDiscount);
  }

}
