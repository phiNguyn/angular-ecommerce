import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: ""

})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  isLogin?:boolean
  constructor(private auth: AuthService, private  router: Router, public cartService: CartService) {
   
    
   }

logOut():void {
  this.auth.logout();
  localStorage.removeItem('user')
  location.reload();
}



  ngOnInit() {
    this.isLogin=  this.auth.isLoggedIn()
    console.log(this.isLogin);
  // location.reload();

    this.items = [
      {
          label: '',
          items: [
              {
                  label: 'Tài Khoản',
                  icon: 'pi pi-refresh',
                  routerLink: '/me'
              },
              {
                  label: 'Đăng xuất',
                  icon: 'pi pi-upload',
                  command: () => {
                    this.logOut()
                }
                  

              }
          ]
      }
  ];
}
  }


