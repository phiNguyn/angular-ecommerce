import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/type/Product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail?: Product
  @ViewChild('quantity', { static: false }) quantity!: ElementRef;
  constructor(private productService: ProductService,private route : ActivatedRoute , private cartService: CartService) { 
   
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductDetails("http://localhost:3000/products/detail/"+id).then((data:any)=> {
    this.productDetail = data
    console.log( this.productDetail);
    
    
    })
  }


  changeQuantity(currentValue: string, action: string) {
    let value = parseInt(currentValue, 10);
    if (action === 'increment' && value < 5) {
      value++;
    } else if (action === 'decrement' && value > 1) {
      value--;
    }

    this.quantity.nativeElement.value = value;
    console.log(value);
  }


  
  addCart(quantity:string) {
    const qty = parseInt(quantity, 10);
    if(this.productDetail) {
      this.cartService.addCart(this.productDetail,qty)
      console.log(this.cartService.getCart());
      
    }
  }

}
