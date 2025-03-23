
// import { Routes } from '@angular/router';
// import { AuthComponent } from './layouts/auth/auth.component';
// import { BlankComponent } from './layouts/blank/blank.component';
// import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';
// import { HomeComponent } from './pages/home/home.component';
// import { BrandsComponent } from './pages/brands/brands.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { CategoriesComponent } from './pages/categories/categories.component';
// import { CheckoutComponent } from './pages/checkout/checkout.component';
// import { DetailsComponent } from './pages/details/details.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';

// export const routes: Routes = [
//   {path:'', redirectTo:'home' , pathMatch:'full'},
//   {path:'',component:AuthComponent, children: [
//     {path:'login',component:LoginComponent ,title:'login'},
//     {path:'register',component:RegisterComponent ,title:'register'},
//   ]},
//   {path:'',component:BlankComponent, children: [
//     {path:'home',component:HomeComponent ,title:'Home'},
//     {path:'brands',component:BrandsComponent ,title:'Brands'},
//     {path:'cart',component:CartComponent ,title:'Cart'},
//     {path:'categories',component:CategoriesComponent ,title:'Categories'},
//     {path:'checkout',component:CheckoutComponent ,title:'Checkout'},
//     {path:'details',component:DetailsComponent ,title:'Details'},
//     {path:'products',component:ProductsComponent ,title:'Products'},
//     {path:'**',component:NotFoundComponent ,title:'NotFound'},

//   ]},
// ];


import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { Component } from '@angular/core';
import { AuthComponent } from './layouts/auth/auth.component';
import { authGuard } from './core/guards/auth.guard';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // صفحات الـ Auth - Lazy Loading

  {path:'',component:AuthComponent , children: [
    {
      path: 'login',
      loadComponent: () =>
        import('./pages/login/login.component').then((m) => m.LoginComponent),
      title: 'Login',
    },
    {
      path: 'register',
      loadComponent: () =>
        import('./pages/register/register.component').then(
          (m) => m.RegisterComponent
        ),
      title: 'Register',
    },
    // {path:'Forgot-Password',component:ForgotpasswordComponent ,title:'Home'},

    {
      path: 'Forgot-Password',
      loadComponent: () =>
        import('./pages/forgotpassword/forgotpassword.component').then(
          (m) => m.ForgotpasswordComponent
        ),
      title: 'Forgot',
    },
  ]},


  // صفحات التطبيق - Lazy Loading
  {
    path: '',
    component: BlankComponent,canActivate:[authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./pages/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
        title: 'Brands',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((m) => m.CartComponent),
        title: 'Cart',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./pages/allorders/allorders.component').then(
            (m) => m.AllordersComponent
          ),
        title: 'Categories',
      },
      {
        path: 'checkout/:id1',
        loadComponent: () =>
          import('./pages/checkout/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
        title: 'Checkout',
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./pages/details/details.component').then(
            (m) => m.DetailsComponent
          ),
        title: 'Details',
      },
      // {
      //   path: 'detailsBrand',
      //   loadComponent: () =>
      //     import('./pages/details-brand/details-brand.component').then(
      //       (m) => m.DetailsBrandComponent
      //     ),
      //   title: 'Details',
      // },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        title: 'Products',
      },
    ],
  },
  // صفحة الـ 404 - Lazy Loading
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'Not Found',
  },
];
