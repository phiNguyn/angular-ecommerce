import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products!: Product[]
 
  constructor(private productService: ProductService) { 

   this.productService.getListProducts("http://localhost:3000/products").then(data => {
    this.products = data
    console.log(this.products);
    
   })

  

}
}
