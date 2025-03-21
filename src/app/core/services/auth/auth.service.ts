import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})


export class AuthService {

  saveUserToken:any = null;

  constructor(private httpClient:HttpClient ) { }

  private readonly _router = inject(Router)

sendRegisterData(data:object):Observable<any>{

  return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data)
}

sendLoginData(data:object):Observable<any>{
  return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
}

saveUserData():void{

if (localStorage.getItem('userToken') !== null) {

 this.saveUserToken =jwtDecode(localStorage.getItem('userToken') !)
}

console.log('userdata',this.saveUserToken);


}

logOutService():void{
localStorage.removeItem('userToken');

this.saveUserToken = null ;

this._router.navigate(['/login'])

}


verifyEmailApi(data:object):Observable<any>{
  return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' , data)
}


verifyCodeApi(data:object):Observable<any>{
  return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',data)
}

verifyPasswordApi(data:object):Observable<any>{
  return this.httpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
}


}
