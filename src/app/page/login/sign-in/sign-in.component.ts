import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent {
  
  
  loginForm: FormGroup;
  errorMsg:any;
  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private authsvc:AuthService){ 

    this.loginForm = this.formBuilder.group(

      {
        username: ['', [Validators.required, Validators.minLength(5),Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]]

      }

    );
  }

  onLogin(){

    this.authsvc.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
    .subscribe(
      (user:User)=>{
        if(user){
       this.authsvc.errorMsg = null;
       this.router.navigate(['list-user']);
        }
        else{
          this.authsvc.errorMsg= 'username and passord do not match';
          this.router.navigate(['sign-in']);
        }
    }
    );


  }
}
