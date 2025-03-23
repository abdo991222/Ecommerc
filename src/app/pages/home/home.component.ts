import { Component, Inject, inject, OnInit } from '@angular/core';
import { ProdectsService } from '../../core/services/prodects/prodects.service';
import { Iprodect } from '../../shared/interface/iprodect';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { Icategories } from '../../shared/interface/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/carts/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  imports: [CarouselModule ,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  customminOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag:false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:2000,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 1,
    nav: true,
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  private readonly prodectsService = inject(ProdectsService)
  private readonly categoriesService = inject(CategoriesService)
  private readonly cartService = inject(CartService)
  private readonly toastrService = inject(ToastrService)
  private readonly ngxSpinnerService = inject(NgxSpinnerService)


  prodects :Iprodect[]= [];
  categories :Icategories []= [];

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

getCategoriesData():void{


this.categoriesService.getAllCategories().subscribe({
  next:(res)=>{
    this.categories = res.data;


  },
  error:(err)=>{
    console.log(err.data);
  }
})
}

  ngOnInit(): void {
  this.getProdectData()
  this.getCategoriesData()
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
