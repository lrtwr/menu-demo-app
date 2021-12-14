import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';



const routes: Routes = [

  { path: 'breadcrumb',
    loadChildren: () => import('./module/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule)
  },
  { path: '**', component: PageNotFoundComponent, data: { breadcrumb: 'NoPageFound' } },
  { path: 'Home', component: HomeComponent, data: { breadcrumb: 'Home' } },
  // ,
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,    { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
