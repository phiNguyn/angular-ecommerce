import { Component, inject, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product.service';
import {  allPro } from 'src/app/type/data';
import { Product } from 'src/app/type/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product!: Product[]
  productDetail?: Product

  currentPage = 1
  countPage = 1
  productService: ProductService = inject(ProductService);

  // sort 
  selectedSort: string= "default"
  selectedLimit: number = 8
  constructor(private cartService: CartService) { 

}

loadProducts(): void {
  this.productService.getProduct(`http://localhost:3000/products?page=${this.currentPage}&limit=${this.selectedLimit}`).then((data: any) => {
    this.product = data.result;
    this.currentPage = data.currentPage
   this.countPage = data.countPage;

  }).catch(error => {
    console.error("Failed to load products", error);
  });
}
ngOnInit(): void {
  this.loadProducts();
}

onSortChange():void {
  
  if(this.selectedSort === "asc") {
    this.product.sort((a, b) => a.price- b.price)
  }
  else if(this.selectedSort === "desc") {
    this.product.sort((a, b) => b.price- a.price)

  }
 
  
}

addProductToCart(product: Product, quantity: string): void {
  const qty = parseInt(quantity, 10);
  if (!isNaN(qty) && qty > 0) {
    this.cartService.addCart(product, qty);
    console.log(this.cartService.getCart());
  }
}

limit() : void {
  this.loadProducts();
}

prev():void {
  if(this.currentPage>1)
  this.currentPage--
  this.loadProducts();

}
next():void {
  if( this.currentPage<this.countPage)
  this.currentPage++
  this.loadProducts();

}
    
}
