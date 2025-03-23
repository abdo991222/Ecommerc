import { Iprodect } from './../../shared/interface/iprodect';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../core/services/brands/brand.service';
import { Ibrand } from '../../shared/interface/ibrand';

@Component({
  selector: 'app-details-brand',
  imports: [],
  templateUrl: './details-brand.component.html',
  styleUrl: './details-brand.component.scss'
})
export class DetailsBrandComponent {

//        private readonly  _ActivatedRoute =inject(ActivatedRoute)
//        private readonly  brandService =inject(BrandService)


//   detailsProduct: Ibrand | null = null ;

// ngOnInit(): void {
//   this._ActivatedRoute.paramMap.subscribe({

// next:(p)=>{
//   let idbrand = p.get('id')


// }

//   })
// }
}
