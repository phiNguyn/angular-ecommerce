import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order/order.service';
import { UserService } from 'src/app/service/user/userService.service';
import { Order } from 'src/app/type/Order';
import { User } from 'src/app/type/User';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userInfo!: User;
  listOrder!: Order[] 
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private order: OrderService
  ) {}

  ngOnInit() {
    const users = localStorage.getItem('user');
    if (users) {
      const user = JSON.parse(users);
      const userId = user._id;
      this.userService.getUserInfor(userId).subscribe((res: any) => {
        this.userInfo = res;
      });

      // order
      this.order.getOrderByUserId(userId).subscribe((res: any) => {
        this.listOrder = res
        console.log(this.listOrder);
        
      })
    }

  }


  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
}
