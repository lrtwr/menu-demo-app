import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/standaard/home/home.component';
import { PageNotFoundComponent } from './component/standaard/page-not-found/page-not-found.component';
import { DezeSiteComponent } from './component/deze-site/deze-site.component';
import { StagingComponent } from './component/staging/staging.component';
import { AboutComponent } from './component/standaard/about/about.component';
import { ChildcreateComponent } from './component/allerlei/childcreate/childcreate.component';
import { RoutingTestComponent } from './component/allerlei/routing-test/routing-test.component';
import { BootstrapModule } from './module/bootstrap/bootstrap.module';
export const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full', data: { breadcrumb: 'Home' }  },
  {
    path: '', children: [ 
      { path: 'staging', component: StagingComponent, data: { breadcrumb: 'Staging' } },
      { path: 'dezesite', component: DezeSiteComponent, data: { breadcrumb: 'Deze Site' } },
      { path: 'bootstrap', children: [], data: { breadcrumb: 'Bootstrap' }, },
      {
        path: 'allerlei', children: [
          { path: 'childcreate', component: ChildcreateComponent, data: { breadcrumb: 'Create a Child Component' } },
          { path: 'routingtest', component: RoutingTestComponent, data: { breadcrumb: 'Routing tests.' } },
        ], data: { breadcrumb: 'Allerlei' },
      },
      { path: 'allerlei', loadChildren: () => import('./module/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule), data: { breadcrumb: 'Allerlei' } },
      { path: 'bootstrap', loadChildren: () => BootstrapModule, data: { breadcrumb: 'Bootstrap' } },
    ], data: { breadcrumb: 'Home' },
  },
  {
    path: '', children: [
      { path: 'about', component: AboutComponent, data: { breadcrumb: 'About' } },
      { path: '**', component: PageNotFoundComponent, data: { breadcrumb: 'NoPageFound', menu: false } },
    ], data: { breadcrumb: 'Home' }
  },


];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
