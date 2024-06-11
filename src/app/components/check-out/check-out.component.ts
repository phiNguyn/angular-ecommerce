import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { OrderService } from 'src/app/service/order/order.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from 'src/app/type/User';
import { UserService } from 'src/app/service/user/userService.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  isLogin: any;
  order: FormGroup;
  user!: User
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
  ) { 
    this.order = this.formBuilder.group({
      user_id: ['', Validators.required],
      total_amount: [0, Validators.required],
      address: ['', Validators.required],
      type_payment: [1, Validators.required],
      order_status: [1, Validators.required],
      cartItems: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.isLogin = this.auth.isLoggedIn();
    console.log(this.isLogin);
    this.initializeForm();
    const users = localStorage.getItem('user')
    if(users){
      const user = JSON.parse(users);
          const userId = user._id
      this.userService.getUserInfor(userId).subscribe((res:any) => {
          this.user = res
          console.log(this.user);
      })
    
    }
  }

  initializeForm() {
    // Gán giá trị người dùng đăng nhập vào form
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      this.order.patchValue({
        user_id: user._id,
        address: user.address
      });
    }
    // Gán giá trị giỏ hàng vào form
    const cart = this.cartService.getCart();
    const cartItems = this.order.get('cartItems') as FormArray;
    cart.forEach((item: any) => {
      const cartItemGroup = this.formBuilder.group({
        product_id: [item._id, Validators.required],
        quantity: [item.quantity, Validators.required],
        unit_price: [item.price, Validators.required],
        total_price: [item.quantity * item.price, Validators.required]
      });
      cartItems.push(cartItemGroup);
    });
    // Tính tổng tiền
    this.order.patchValue({
      total_amount: this.cartService.getTotal()
    });
  }
vl() {
  let cc = confirm("Nhâns đồng ý để đặt hàng")
    if(cc) {
     
    }
}
  orderSubmit() {
    if (this.order.valid) {
      let cc = confirm("Nhâns đồng ý để đặt hàng")
      if(cc) {
       
        this.orderService.newOrder(this.order.value).subscribe((order: any) => {
          if (order.status === "OK") {
            console.log(order);
            alert(order.message)
            
            const orderId = order.newOrder._id;
            const cartItems = this.order.get('cartItems') as FormArray;
            cartItems.controls.forEach(item => {
              const orderItemData = {
                ...item.value,
                order_id: orderId
              };
              this.orderService.addOrderItem(orderItemData).subscribe();
              // console.log(orderItemData);
              
            });
            
            this.messageService.add({ severity: 'success', summary: 'Success', detail: order.message });
            setTimeout(() => {
              this.router.navigate(["/home"])
              localStorage.removeItem('cart')
            }, 3000);
          }else{
          
    
          }
        });
        
        
      }
      }
 

  }

  Summary(): number {
    return this.cartService.getTotal();
  }
}
