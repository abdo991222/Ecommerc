import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdectsService {

  constructor(private httpClient:HttpClient){ }


getAllProdect():Observable<any>{
  return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
}

getSpecificProdect(id:string | null):Observable<any>{
  return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
}
