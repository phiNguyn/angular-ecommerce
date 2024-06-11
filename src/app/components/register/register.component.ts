import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerForm!: FormGroup
  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPass: new FormControl('',[Validators.required]),
    
    })
    this.registerForm.setValidators(this.passwordMatchValidator())
   }

   passwordMatchValidator() : ValidatorFn{
    return (formGroup: AbstractControl): ValidationErrors | null => {
    const pass = formGroup.get('pass')?.value
    const confirmPassword = formGroup.get('confirmPass')?.value
    if(pass !== confirmPassword) {
      return {mismatch: true}
    }
      else{
        return null
      }
    }

   }

  ngOnInit() {
  }
  register() {
    if (!this.registerForm.valid) {
      console.log("nhập vô");
    }

    this.authService.register(this.registerForm.value).subscribe((res) =>{
      console.log(res);
      if(res.status === 'OK') {
        this.router.navigate(["/login"])
      }
      else {
      console.log(res.message);
      alert(res.message);
      }
      
    })
  }
}
