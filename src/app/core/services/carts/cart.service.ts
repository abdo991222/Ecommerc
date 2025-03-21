import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartNumber: BehaviorSubject<number> = new BehaviorSubject(0) ;

  constructor(private httpClient : HttpClient) { }

  addProductToCart(id:string):Observable<any>{
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
      {
        "productId": id
    },
// {
//   headers:{
//     token:localStorage.getItem('userToken') !
//   }
// }


    )
  }

  GetLoggedUser():Observable<any>{
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/cart'
      ,
      // {
      //   headers:{
      //     token:localStorage.getItem('userToken') !
      //   }
      // }
    )
  }

  RemoveSpecifiCart(id:string):Observable<any>{
    return this.httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

      // {
      //   headers:{
      //     token:localStorage.getItem('userToken') !
      //   }
      // }
    )
    }



    UpdateCartProduct(id:string , newCount:number):Observable<any>{
      return this.httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,

        {
          "count": newCount
      },

      // {
      //   headers:{
      //     token:localStorage.getItem('userToken') !
      //   }
      // }



      )
    }

    claerUserCart():Observable<any>{
      return this.httpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',

// {
//   headers:{
//     token : localStorage.getItem('userToken') !
//   }
// }
      )
    }


}
