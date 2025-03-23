import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../core/services/orders/order.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit  {

  private readonly  activatedRoute= inject(ActivatedRoute);
  private readonly  orderService= inject(OrderService);


  CartId :string ="";

checkOutForm : FormGroup = new FormGroup ({
  details: new FormControl (null ,  [Validators.required]),
  phone : new FormControl (null ,  [Validators.required , Validators.pattern(/^(\+20|0)?1[0-2,5]{1}[0-9]{8}$/)]),
  city:new FormControl (null, [Validators.required])
})

ngOnInit(): void {
   this.getCartId();
}

 getCartId():void{
  this.activatedRoute.paramMap.subscribe({
    next:(parm)=>{
    this.CartId = parm.get('id1') !
    },
    error:(err)=>{
console.log(err);

    }
  })
}


submitForm():void{
  console.log(this.checkOutForm.value);
this.CartId

this.orderService.getOrderApi(this.CartId,this.checkOutForm.value).subscribe({
next:(res)=>{
console.log(res);
if(res.status === 'success'){
  open(res.session.url, '_self')

}
else{

}

},

error:(err)=>{
  console.log(err);

}
})

}

}
