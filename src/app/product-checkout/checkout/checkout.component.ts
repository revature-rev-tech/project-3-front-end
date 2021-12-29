import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartAndItems, ItemProductAndDiscount } from '../cart-and-items.model';
import { ProductAndDiscount } from '../product-and-discount.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



  productAndDiscount: ProductAndDiscount = new ProductAndDiscount();

  cartAndItems: CartAndItems = new CartAndItems();

  userId: number = 0;
  cartTotal: number = 0;
  cartPaid: boolean = false;
  cartRemoved: boolean = false;
  cartItems: Array<ItemProductAndDiscount> = [];


  testcheckout: ProductAndDiscount[] = [
    {
      productId: 1,
      productSku: "25666",
      productName: "laptop",
      productDescription: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
      productCategory: "Technology",
      productCost: 37.00,
      productQty: 5,
      imageUrl: "../../assets/image/laptop.webp",
      productRemoved: false,
      discountId: 0,
      discountDescription: "over 20 people have this in their cart",
      discountPercentage: 0,
    },
    {
      productId: 2,
      productSku: "111111",
      productName: "laptop2",
      productDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      productCategory: "Technology",
      productCost: 100.00,
      productQty: 2,
      imageUrl: "../../assets/image/laptop.webp",
      productRemoved: false,
      discountId: 0,
      discountDescription: "",
      discountPercentage: 35,
    }
  ]
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  cartItemNumber = 5;
  ngOnInit(): void {
  }
  remove() {
    console.log("remove")
    this.productAndDiscount.productRemoved = true
  }
  changequantity() {
    console.log("change quantity")
  }

}
