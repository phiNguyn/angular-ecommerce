import { Component, OnInit } from '@angular/core';
import { FormGroup  , FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {  Router } from '@angular/router';


import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 
 
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup
  constructor(private auth: AuthService,private formBuiler :FormBuilder , private router: Router,private cookieService: CookieService,private messageService: MessageService) {
  this.loginForm = this.formBuiler.group({
    email: ['', Validators.required],
    pass: ['', Validators.required]
  })
  }

  login():void {

    if (!this.loginForm.valid) {
      console.log("nhập vô");
    }
    
      this.auth.login(this.loginForm.value).subscribe((res:any)  => {
        if(res.status === "OK" ) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
          let data = JSON.stringify(res.result)
          localStorage.setItem('user', data)  
          this.cookieService.set('access_token', res.result.token)  
          setTimeout(() => {
            this.router.navigate(["/"])

          }, 3000);
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
        }
      })
      
  }
  ngOnInit(): void {
    
  }

}
