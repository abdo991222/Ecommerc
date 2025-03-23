import { Component, inject } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


   isLodaing:boolean = false ;
    isMessage:string= "";
    isSecces:string= "";


    private readonly  authService = inject(AuthService)
    private readonly  router = inject(Router)



    loginForm : FormGroup = new FormGroup({

      email: new FormControl(null ,[Validators.required,Validators.email] ),
      password : new FormControl(null ,  [Validators.required ,Validators.pattern(/^[A-Za-z\d]{6,}$/)]),


    },)


    submitForm():void{
  if(this.loginForm.valid) {
  this.isLodaing = true ;
    this.authService.sendLoginData(this.loginForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message === 'success'){

        setTimeout(() => {
          localStorage.setItem('userToken', res.token)

          this.authService.saveUserData();

          this.router.navigate (['/home'])

        }, 500);
        this.isSecces = res.message

        }
        this.isLodaing = false ;

      },
      error:(err)=>{
        console.log(err);
        this.isLodaing = false ;

       this.isMessage= err.error.message ;


      }
    })
  }
    }
  }

