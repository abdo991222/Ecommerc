import { Brand } from './../../shared/interface/iprodect';
import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../core/services/brands/brand.service';
import { Ibrand } from '../../shared/interface/ibrand';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {
  private readonly brandService= inject(BrandService)

ViewBrand:Ibrand [] = [];

ngOnInit(): void {
  this.getBrand()
}

getBrand(): void {
  this.brandService.BrandApi().subscribe({
    next: (res) => {
      console.log(res.data);
      this.ViewBrand = res.data;
    },

  });
}


// getDetiles(id:string):void{
// this.brandService.getSpsificBrand(id).subscribe({

//   next:(res)=>{
//     console.log(res.data);


//   }
// })

// }



}


//   getBrand():void{
//     this.brandService.BrandApi().subscribe({
//       next:(res)=>{
//  this.ViewBrand = res.data
//         console.log(this.ViewBrand);
//       },

//       error:(err)=>{
//         console.log(err);

//       }
//     })
//   }



// import { Component, inject, OnInit } from '@angular/core';
// import { BrandsService } from '../../core/services/brands/brands.service';
// import { IBrand } from '../../shared/interfaces/ibrand';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-brands',
//   imports: [RouterLink],
//   templateUrl: './brands.component.html',
//   styleUrl: './brands.component.scss',
// })
// export class BrandsComponent implements OnInit {
//   private readonly brandsService = inject(BrandsService);
//   brands: IBrand[] = [];

//   ngOnInit(): void {
//     this.getBrandsData();
//   }
//   getBrandsData(): void {
//     this.brandsService.getAllBrands().subscribe({
//       next: (res) => {
//         console.log(res.data);
//         this.brands = res.data;
//       },

//     });
//   }
// }


