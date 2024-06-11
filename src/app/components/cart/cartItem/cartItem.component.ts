import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-cartItem',
  templateUrl: './cartItem.component.html',
  styleUrls: ['./cartItem.component.css'],
  providers: [CurrencyPipe]
})
export class CartItemComponent implements OnInit {
    cart: any = []
  constructor(private cartService: CartService, private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.cart = this.cartService.getCart()
    console.log(this.cart);
    
  }
  
  format(number: number) {
 return this.currencyPipe.transform(number, "VND",  'symbol', '1.0-0') || '';
  }

  deleteCart(id:string) {
    this.cartService.deleteCart(id)
    this.cart = this.cartService.getCart()
  }

  
}
