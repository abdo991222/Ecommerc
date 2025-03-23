import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../core/services/carts/cart.service';
import { Icart } from '../../shared/interface/icart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports:  [ RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
private readonly cartService= inject(CartService)

getproduct:Icart= {}  as Icart;

ngOnInit(): void {
  this.getCart()
}

getCart():void{
  this.cartService.GetLoggedUser().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.getproduct = res.data

    },
    error:(err)=>{
      console.log(err);

    }
  })
}


RemoveItem(id:string):void{
this.cartService.RemoveSpecifiCart(id).subscribe({
  next:(res)=>{
console.log(res);
      this.getproduct = res.data
      this.cartService.cartNumber.next(res.numOfCartItems)

  },
  error:(err)=>{
console.log(err);

  }
})
}

UpdetCart(id:string ,Count:number):void{
this.cartService.UpdateCartProduct(id , Count).subscribe({
  next:(res)=>{
console.log(res);

    this.getproduct = res.data

  },
  error:(err)=>{
    console.log(err);

  }
})
}


clearCart():void{
  this.cartService.claerUserCart().subscribe({
    next:(res)=>{
console.log(res);
this.getproduct = {}  as Icart;
this.cartService.cartNumber.next(0)


    },
    error:(err)=>{
      console.log(err);

    }
  })

}


}
