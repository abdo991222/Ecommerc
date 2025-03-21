import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {

if(localStorage.getItem('userToken')){
  req = req.clone({
    setHeaders:{
      token: localStorage.getItem('userToken') !
    }
  })
}
  return next(req);
};

// import { HttpInterceptorFn } from '@angular/common/http';

// export const headersInterceptor: HttpInterceptorFn = (req, next) => {
//   const token = localStorage.getItem('userToken'); // الحصول على التوكن

//   if (token) {
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}` // التوكن بيحتاج يكون في هيئة "Bearer"
//       }
//     });
//   }

//   return next(req);
// };
