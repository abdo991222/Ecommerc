import { CartService } from './../../core/services/carts/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { ProdectsService } from '../../core/services/prodects/prodects.service';
import { Iprodect } from '../../shared/interface/iprodect';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


  prodects :Iprodect[]= [];

  private readonly prodectsService = inject(ProdectsService)
  private readonly cartService = inject(CartService)
    private readonly toastrService = inject(ToastrService)


    ngOnInit(): void {
      this.getProdectData()
      }

  getProdectData():void{

    this.prodectsService.getAllProdect().subscribe({
      next:(res)=>{
      this.prodects = res.data
      // console.log(res.data);


      },
      error:(errr)=>{
        console.log(errr);
      }
      })
  }






  addToCart(id:string):void{
    this.cartService.addProductToCart(id).subscribe({
      next:(res)=>{
    console.log(res);
    if(res.status === 'success'){

    this.cartService.cartNumber.next(res.numOfCartItems)
    console.log(res.numOfCartItems);


      this.toastrService.success(res.message, 'Fresh Cart')

    }

      },
      error:(err)=>{
    console.log(err);

      }
    })
      }


}
