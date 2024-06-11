import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { allPro } from '../type/data';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  async getListProducts(url: string): Promise<Product[]> {
    const response = await fetch(url);
    let result = await response.json();
    return result;
  }

  async getProduct(url: string): Promise<allPro[]> {
    const response = await fetch(url);
    let result = await response.json();
    return result;
  }

  async getProductDetails(url: string): Promise<Product[]> {
    const response = await fetch(url);
    let result = await response.json();

    return result;
  }
  constructor() {}
}
