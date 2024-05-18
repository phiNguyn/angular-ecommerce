import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  productHot!: Product[]
  productService: ProductService = inject(ProductService)
  constructor() {
    this.productService.getListProducts("http://localhost:3000/products").then(data => {
      this.productHot = data
      console.log(this.productHot);
      
     })

  }

  

}
