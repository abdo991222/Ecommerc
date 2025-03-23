import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient :HttpClient) { }




BrandApi():Observable<any>{

  return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  // getSpsificBrand(id:string | null):Observable<any>{

  //   return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  // }

}

