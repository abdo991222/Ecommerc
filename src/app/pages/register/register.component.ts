import { Component, inject } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  isLodaing:boolean = false ;
  isMessage:string= "";
  isSecces:string= "";


  private readonly  authService = inject(AuthService)
  private readonly  router = inject(Router)



  registerForm : FormGroup = new FormGroup({

    name: new FormControl(null , [ Validators.required ,Validators.minLength(5),Validators.maxLength(20) ]),
    email: new FormControl(null ,[Validators.required,Validators.email] ),
    password : new FormControl(null ,  [Validators.required ,Validators.pattern(/^[A-Za-z\d]{10,}$/)]),
    rePassword: new FormControl(null,  [Validators.required]),
    phone: new FormControl(null ,  [Validators.required ,Validators.pattern(/^(\+20|0)?1[0-2,5]{1}[0-9]{8}$/)]),

  }, this.confirmPassword)


  submitForm():void{
if(this.registerForm.valid) {
this.isLodaing = true ;
  this.authService.sendRegisterData(this.registerForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      if(res.message === 'success'){

      setTimeout(() => {
        this.router.navigate (['/login'])

      }, 500);

      this.isSecces = res.message
    

      }
      else{
        this.registerForm.markAllAsTouched();
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
  confirmPassword( groub:AbstractControl){

    const password = groub.get('password')?.value;
    const rePassword =groub.get('rePassword')?.value;

    return password === rePassword ? null : { mismatch:true } ;
  }

}
