import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { setTimeout } from 'node:timers/promises';

@Component({
  selector: 'app-forgotpassword',
  imports: [ ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent {

  private readonly _AuthService =inject(AuthService);
  private readonly _Router =inject(Router);


  isLodaing:boolean= false ;
  step: number = 1 ;


verifyEmail:FormGroup = new FormGroup ({
  email: new FormControl (null ,  [Validators.required , Validators.email   ])
});


verifyCode:FormGroup =new FormGroup ({
  resetCode: new FormControl(null,  [Validators.required , Validators.pattern(/^[0-9]{6}$/)])
});

verifyPassword: FormGroup = new FormGroup ({
  email: new FormControl (null ,  [Validators.required , Validators.email   ]),
  newPassword: new FormControl(null ,  [Validators.required ,Validators.pattern(/^[A-Za-z\d]{6,}$/)]),

})


verifyEmailsubmet():void{
  this.isLodaing = true ;

  this._AuthService.verifyEmailApi(this.verifyEmail.value).subscribe({
    next:(res)=>{
      console.log(res);
      if (res.statusMsg === 'success') {

        this.step = 2;
      }
      this.isLodaing = false ;
    },


    error:(err)=>{
      console.log(err);

    }
  })
}

verifyCodeSubmet():void{
  this.isLodaing = true ;
  this._AuthService.verifyCodeApi(this.verifyCode.value).subscribe({
    next:(res)=>{
      console.log(res);
      if(res.status === 'Success'){
      this.step = 3;

      }
      this.isLodaing = false ;

    },
    error:(err)=>{
      console.log(err);

    }
  })
}


verifyPasswordsubmet():void{
  this.isLodaing = true ;
  this._AuthService.verifyPasswordApi(this.verifyPassword.value).subscribe({
    next:(res)=>{
      console.log(res);

    localStorage.setItem('userToken' , res.token)

    this._AuthService.saveUserData()
      this._Router.navigate(['/home'])
      this.isLodaing = false ;
    }
  })
}

}
