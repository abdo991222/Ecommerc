
import {  inject } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const  _Roter = inject(Router)

if(localStorage.getItem('userToken') !==null){

return true;
}
else{
  _Roter.navigate(['/login'])
  return false ;
}


  return true;
};
