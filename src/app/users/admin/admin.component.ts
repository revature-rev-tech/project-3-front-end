import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductAndDiscount } from 'src/app/product-checkout/product-and-discount.model';
import { FileUploadService } from 'src/app/uploads/file-upload.service';
import { ProductService } from '../../product/product.service';
import { Discount, Product } from '../../product/store-product/product.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allProducts: Product[] = [];
  productObject: Product = new Product();
  formValue         !: FormGroup;
  formValueProduct  !: FormGroup;
  formValueDiscount !: FormGroup;
  formValueDiscountUpdate !: FormGroup;
  errorProductMsg: string = '';

  newProduct: Product = {
    productId: 0,
    productSku: "",
    productName: "",
    productDescription: "",
    productCategory: "",
    productCost: 0,
    productQty: 0,
    productRemoved: false,
    imageUrl: ""
  }
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private productService: ProductService,
    private fileUploadService: FileUploadService) { }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      product_sku: [''],
      product_name: [''],
      product_cost: [''],
      product_category: [''],
      product_description: [''],
      product_qty: [''],
      image_url: ['']
    })

    this.formValueProduct = this.formbuilder.group({
      product_sku: [''],
      product_name: [''],
      product_cost: [''],
      product_category: [''],
      product_description: [''],
      product_qty: [''],
      image_url: ['']
    })

    this.formValueDiscount = this.formbuilder.group({
      discount_percentage: [''],
      discount_description: ['']
    })

    this.formValueDiscountUpdate = this.formbuilder.group({
      discount_percentage: [''],
      discount_description: ['']
    })
    this.loadDiscountProducts();
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getAllProductsService().subscribe(
      (response: any) => {

        for (let index = 0; index < this.allDiscountProducts.length; index++) {
          for (let index2 = 0; index2 < response.length; index2++) {
            if (this.allDiscountProducts[index].productId == response[index2].productId) {
              response.splice(index2, 1);
            }
          }
        }
        this.allProducts = response;
      },
      (error: any) => {
        this.errorProductMsg = "Unable to get allProducts - Try later";
        console.log(this.errorProductMsg);
      }
    )
  }

  public uploadImage(imageInput: any) {
    const reader = new FileReader(); console.log(reader);

    console.log(imageInput.files[0]);
    this.fileUploadService.onUpload(imageInput.files[0]).subscribe({
      next: async (response) => {

        this.productObject.imageUrl = response;
        this.newProduct.imageUrl = response;
        
      },
      error: err => {
        console.log(err);
      }
    })

  }
  addProducts() {
    this.newProduct.productSku = this.formValue.value.product_sku;
    this.newProduct.productName = this.formValue.value.product_name;
    this.newProduct.productCost = this.formValue.value.product_cost;
    this.newProduct.productCategory = this.formValue.value.product_category;
    this.newProduct.productDescription = this.formValue.value.product_description;
    this.newProduct.productQty = this.formValue.value.product_qty;
      this.productService.addProductsService(this.newProduct).subscribe(
        (response) => {
          this.loadProducts();
        },
        (error) => {
          console.log(error);
        })
      let ref = document.getElementById("cancel");
      ref?.click();
      this.formValue.reset();
      this.router.navigate(['admin'])
      this.loadProducts();
  }
  onEditRow(row: any) {
    this.productObject.productId = row.productId;
    this.formValue.controls["product_sku"].setValue(row.productSku);
    this.formValue.controls["product_name"].setValue(row.productName);
    this.formValue.controls["product_cost"].setValue(row.productCost);
    this.formValue.controls["product_category"].setValue(row.productCategory);
    this.formValue.controls["product_description"].setValue(row.productDescription);
    this.formValue.controls["product_qty"].setValue(row.productQty);
    this.formValue.controls["image_url"].setValue("");
    this.loadProducts();
  }
  updateProducts() {
    this.productObject.productSku = this.formValue.value.product_sku;
    this.productObject.productName = this.formValue.value.product_name;
    this.productObject.productCost = this.formValue.value.product_cost;
    this.productObject.productCategory = this.formValue.value.product_category;
    this.productObject.productDescription = this.formValue.value.product_description;
    this.productObject.productQty = this.formValue.value.product_qty;
    this.productService.updateProductsService(this.productObject).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['admin']);
        let ref = document.getElementById("cancel");
        ref?.click();
        this.formValue.reset();
        this.router.navigate(['admin'])
        this.loadProducts();
      })
  }
  deleteProduct(pId: number) {
    this.productService.deleteProductsService(pId).subscribe(
      (Response) => {
        this.loadProducts();
      },
      (error) => console.log(error)
    )
  }
  allDiscountProducts: ProductAndDiscount[] = [];
  discountObject: Discount = new Discount;
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

  newDiscount: Discount = {
    discountId: 0,
    productId: 0,
    discountDescription: "",
    discountPercentage: 0.0
  }


  loadDiscountProducts() {
    this.productService.getAllDiscountsProductsService().subscribe(
      (response) => {
        this.allDiscountProducts = response;
      },
      (error) => {
        this.errorProductMsg = "Unable to get allDiscountProducts - Try later";
        console.log(this.errorProductMsg);
      }
    )
  }
  addDiscountProducts() {
    this.newDiscount.discountPercentage = this.formValueDiscount.value.discount_percentage;
    this.newDiscount.discountDescription = this.formValueDiscount.value.discount_description;

    this.newDiscount.productId = this.productObject.productId;

    this.productService.addDiscountService(this.newDiscount).subscribe(
      (response) => {
        this.loadDiscountProducts();
        this.loadProducts();
      },
      (error) => {
        console.log(error);
      })

    let ref = document.getElementById("cancel");
    ref?.click();
    this.formValue.reset();
    this.router.navigate(['admin'])
    this.loadDiscountProducts();
    this.loadProducts();
  }

  updateDiscountProducts() {
    this.discountObject.discountPercentage = this.formValueDiscount.value.discount_percentage;
    this.discountObject.discountDescription = this.formValueDiscount.value.discount_description;
    this.productService.updateDiscountService(this.discountObject).subscribe(
      (response) => {

        this.router.navigate(['admin']);

        let ref = document.getElementById("cancel");
        ref?.click();
        this.formValueDiscount.reset();
        this.router.navigate(['admin'])
        this.loadDiscountProducts();
        this.loadProducts();
      })
  }

  deleteDiscountProducts(discountId: number) {
    this.productService.deleteDiscountService(discountId).subscribe(
      (Response) => {
        this.loadDiscountProducts();
        this.loadProducts();
      },
      (error) => console.log(error)
    )
  }


  onDiscountEditRow(row: any) {
    this.discountObject.discountId = row.discountId;
    this.discountObject.productId = row.productId;

    //To add discounts
    this.formValueDiscount.controls["discount_percentage"].setValue(row.discountPercentage);
    this.formValueDiscount.controls["discount_description"].setValue(row.discountDescription);
    //To update discounts
    this.formValueDiscountUpdate.controls["discount_percentage"].setValue(row.discountPercentage);
    this.formValueDiscountUpdate.controls["discount_description"].setValue(row.discountDescription);
    //Reload the page
    this.loadDiscountProducts();
    this.loadProducts();
  }
}//end class