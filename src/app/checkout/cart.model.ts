import { Product, ProductAndDiscount } from "../product/store-product/product.model";


export class CartAndItems {

    userId: number = 0;
    cartTotal: number = 0;
    cartPaid: boolean = false;
    cartRemoved: boolean = false;
    cartItems: Array<ItemProductAndDiscount> = [];

}

export class ItemProductAndDiscount {

    cartItemId: number = 0;
    cartId: number = 0;
    productId: number = 0;
    cartQty: number = 0;
    productAndDiscount: ProductAndDiscount = new ProductAndDiscount();
    
}