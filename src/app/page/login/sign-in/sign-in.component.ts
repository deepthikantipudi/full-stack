import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  loginForm: FormGroup;
  errorMsg:any;
  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private authsvc:AuthService){ 

    this.loginForm = this.formBuilder.group(

      {
        username: ['', [Validators.required, Validators.minLength(5),Validators.email]];
        password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]];

      }


    );
    }
}
