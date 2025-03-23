import { Iprodect } from './../../shared/interface/iprodect';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProdectsService } from '../../core/services/prodects/prodects.service';
import { CartService } from '../../core/services/carts/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  detailsProduct: Iprodect | null = null ;

     private readonly  _ActivatedRoute =inject(ActivatedRoute)
     private readonly _ProdectsService = inject(ProdectsService)
     private readonly cartService = inject(CartService)
    private readonly toastrService = inject(ToastrService)


  ngOnInit(): void {

this._ActivatedRoute.paramMap.subscribe({
  next:(p)=>{
   let Idproduct = p.get('id');

this._ProdectsService.getSpecificProdect(Idproduct).subscribe({
next:(res)=>{
  // console.log( res.data);

          this.detailsProduct = res.data

},

error:(err)=>{
console.log(err);

}
})

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
    })
      }


}
