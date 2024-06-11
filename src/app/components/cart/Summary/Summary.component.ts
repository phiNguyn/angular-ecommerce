import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-Summary',
  templateUrl: './Summary.component.html',
  styleUrls: ['./Summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private cartService: CartService) { }
 
    
  ngOnInit() {
    
  }
  Summary():number {
    return this.cartService.getTotal()
  }
  clear() {
   localStorage.removeItem('cart')
   }
}
