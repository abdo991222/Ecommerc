import{a as w}from"./chunk-C25PNMAC.js";import{l as y}from"./chunk-RKEXIY7C.js";import{a as I}from"./chunk-U23FDCC3.js";import{i as h}from"./chunk-WB46C33D.js";import"./chunk-HG4UXZJC.js";import{Eb as a,Fb as s,Gb as P,Ib as S,La as v,Oa as o,W as c,Ya as g,ba as p,ca as u,ib as d,nb as f,ob as x,pb as r,qb as i,rb as l,ub as C,wb as b,xb as _}from"./chunk-CPR7NIO3.js";import"./chunk-4CLCTAJ7.js";var k=(n,t)=>t.id,M=n=>["/details",n];function D(n,t){if(n&1){let e=C();r(0,"div",2)(1,"div",3)(2,"div",4),l(3,"img",5),i(),r(4,"div",6)(5,"h4",7),a(6),i(),r(7,"h3",8),a(8),i(),r(9,"div",9)(10,"span"),a(11),i(),r(12,"div",10),l(13,"i",11),r(14,"span",12),a(15),i()()()()(),r(16,"button",13),b("click",function(){let E=p(e).$implicit,T=_();return u(T.addToCart(E.id))}),a(17,"Add To Cart"),i()()}if(n&2){let e=t.$implicit;o(),d("routerLink",S(6,M,e.id)),o(2),d("src",e.imageCover,v),o(3),s(e.category.name),o(2),s(e.title.split(" ",2).join(" ")),o(3),P("",e.price," EGP"),o(4),s(e.ratingsAverage)}}var O=class n{prodects=[];prodectsService=c(w);cartService=c(I);toastrService=c(y);ngOnInit(){this.getProdectData()}getProdectData(){this.prodectsService.getAllProdect().subscribe({next:t=>{this.prodects=t.data},error:t=>{console.log(t)}})}addToCart(t){this.cartService.addProductToCart(t).subscribe({next:e=>{console.log(e),e.status==="success"&&(this.cartService.cartNumber.next(e.numOfCartItems),console.log(e.numOfCartItems),this.toastrService.success(e.message,"Fresh Cart"))},error:e=>{console.log(e)}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-products"]],decls:6,vars:0,consts:[[1,"mb-7"],[1,"grid","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-10"],[1,"card","border","border-green-400/50","rounded-md","overflow-hidden","shadow","relative"],[3,"routerLink"],[1,"card-img"],["alt","",1,"w-full",3,"src"],[1,"card-body","px-2","py-4"],[1,"text-green-500","text-xs"],[1,"font-medium"],[1,"flex","justify-between","items-center"],[1,"flex","items-center"],[1,"fas","fa-star","text-yellow-300"],[1,"text-gray-500"],[1,"btn-main","text-white","border","rounded","py-2","px-9","text-center","w-[90%]","mx-auto",3,"click"]],template:function(e,m){e&1&&(r(0,"section")(1,"h4",0),a(2,"Popular Products"),i(),r(3,"div",1),f(4,D,18,8,"div",2,k),i()()),e&2&&(o(4),x(m.prodects))},dependencies:[h],styles:[".card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:translateY(100%);transition:all .6s}.card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:translateY(0)}.btn-main[_ngcontent-%COMP%]{background-color:#11bd11}"]})};export{O as ProductsComponent};
