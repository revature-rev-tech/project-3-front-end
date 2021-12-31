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



  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private cartAndItemsService: CartAndItemsService, private transactionService: TransactionService,
    private authService: AuthService, private cartService: CartService, private cartItemService: CartItemService) { }


  ngOnInit(): void {
    this.displayAllCarts();
    this.totalCost = 0;
    this.getItemsTotal();
  }


  displayAllCarts() {
    //var cartId: any = this.activatedRoute.snapshot.paramMap.get("cartId");
    this.cartAndItemsService.getCartAndItemsService(1).subscribe((response) => {
      this.cartAndItems = response;
      this.totalCost = this.getItemsTotal()
      console.log("total = " + this.totalCost.toFixed(2))
    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
      console.log(error);
    });
  }


  getItemsTotal(): any {
    this.cartAndItems.cartItems.forEach((value, index) => {
      if (value.productAndDiscount.discountPercentage < 1.0) {
        this.total += value.productAndDiscount.productCost
      } else {
        this.total += value.productAndDiscount.productCost -
          ((value.productAndDiscount.discountPercentage / 100) * (value.productAndDiscount.productCost * value.cartQty))
      }
    })
    return this.total
  }


  remove(cartItemId: number) {
    this.cartItemService.removeItemService(cartItemId).subscribe((response) => {
      response;
      this.ngOnInit()
    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
    });
  }

  changequantity(event: any, item: ItemProductAndDiscount) {

    this.itemUpdating.cartItemId = item.cartItemId;
    this.itemUpdating.cartId = item.cartId;
    this.itemUpdating.cartQty = event.target.value;
    this.itemUpdating.productId = item.productId;

    this.cartItemService.updateItemService(this.itemUpdating).subscribe((response) => {
      this.cartAndItems.cartItems[item.cartId].cartItemId = response.cartItemId;
      this.cartAndItems.cartItems[item.cartId].cartId = response.cartId;
      this.cartAndItems.cartItems[item.cartId].cartQty = response.cartQty;
      this.cartAndItems.cartItems[item.cartId].productAndDiscount.productId = response.productId;
      console.log(response);
      this.ngOnInit();

    }, error => {
      this.errorMsg = 'There was some internal error! Please try again later!';
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


}