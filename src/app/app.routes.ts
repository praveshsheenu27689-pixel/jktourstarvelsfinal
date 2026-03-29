import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/hero/hero.component').then(m => m.HeroComponent) },
  { path: 'destinations/:type', loadComponent: () => import('./components/destinations-list/destinations-list.component').then(m => m.DestinationsListComponent) },
  { path: 'business-tours', loadComponent: () => import('./components/business-tours/business-tours.component').then(m => m.BusinessToursComponent) },
  { path: 'about', loadComponent: () => import('./components/about-page/about-page.component').then(m => m.AboutPageComponent) },
  { path: 'services', loadComponent: () => import('./components/services-page/services-page.component').then(m => m.ServicesPageComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact-page/contact-page.component').then(m => m.ContactPageComponent) },
  { path: 'destination/:name', loadComponent: () => import('./components/destination-page/destination-page.component').then(m => m.DestinationPageComponent) },
  { path: 'experience/:name', loadComponent: () => import('./components/category-page/category-page.component').then(m => m.CategoryPageComponent) },
  { path: '**', redirectTo: '' }
];
