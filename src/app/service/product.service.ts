import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
async getListProducts(url: string): Promise<Product[]> {
  const response = await fetch(url);
    let result = await response.json();
    return result;
}
constructor() { 

}
  

}
