import { Injectable } from '@angular/core';
import { Product } from 'src/app/type/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private loadCart(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  }

  addCart(product: Product, quantity: number): void {
    const existID = this.cart.findIndex((item: Product) => item._id === product._id);
    if (existID === -1) {
      this.cart.push({ ...product, quantity });
    } else {
      this.cart[existID].quantity += quantity;
    }
    this.saveCart();
  }

  getCart(): Product[] {
    return this.cart;
  }

  cartLength(): number {
    return this.cart.reduce((length, item) => length + item.quantity, 0);
  }

  deleteCart(id: string): void {
    this.cart = this.cart.filter((item: Product) => item._id !== id);
    this.saveCart();
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
