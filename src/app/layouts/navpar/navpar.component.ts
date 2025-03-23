import { Component, inject, Input, OnInit, } from '@angular/core';
import { RouterLink, RouterLinkActive, } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { CartService } from '../../core/services/carts/cart.service';
import { log } from 'util';

@Component({
  selector: 'app-navpar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navpar.component.html',
  styleUrl: './navpar.component.scss'
})
export class NavparComponent implements OnInit {


CountNumber :Number = 0;

  private readonly authService =inject(AuthService);
  private readonly cartService =inject(CartService);

@Input() isLogin:boolean=true;

ngOnInit(): void {

this.cartService.GetLoggedUser().subscribe({

  next:(res)=>{
this.cartService.cartNumber.next(res.numOfCartItems)
  }
})

    this.cartService.cartNumber.subscribe({
next:(data)=>{
this.CountNumber = data
}

    })



}




logOut():void{

  this.authService.logOutService()
}


}
