import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'custom-theme-upoload',
    loadChildren: () => import('./pages/custom-theme-upoload/custom-theme-upoload.module').then( m => m.CustomThemeUpoloadPageModule)
  },
  {
    path: 'laptop-list',
    loadChildren: () => import('./pages/laptop-list/laptop-list.module').then( m => m.LaptopListPageModule)
  },
  {
    path: 'phone-list',
    loadChildren: () => import('./pages/phone-list/phone-list.module').then( m => m.PhoneListPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'cart-view',
    loadChildren: () => import('./pages/cart-view/cart-view.module').then( m => m.CartViewPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
