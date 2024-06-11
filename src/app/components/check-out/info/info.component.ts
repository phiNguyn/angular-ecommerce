import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/userService.service';
import { User } from 'src/app/type/User';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user!: User 
  info!: FormGroup
  constructor(private userService: UserService, private _fb: FormBuilder) {
    this.info = _fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required,Validators.minLength(10)]],
      address: ['',[Validators.required]]
    })
   }

  ngOnInit() {

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

}
