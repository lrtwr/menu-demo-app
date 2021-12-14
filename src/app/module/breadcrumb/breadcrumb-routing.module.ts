import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PageNotFoundComponent } from '../../component/page-not-found/page-not-found.component'
import { UserResolverService } from './service/user-resolver.service';



const routes: Routes = [
   { path: '', redirectTo: '/breadcrumbhome', pathMatch: 'full' },
  { path: 'breadcrumbhome', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'breadcrumbusers',
    component: UserListComponent,
    data: { breadcrumb: '/Users' },
    children: [
      {
        path: ':id',
        component: UserComponent,
        data: { breadcrumb: (data: any) => `${data.user.name}` },
        resolve: { user: UserResolverService }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbRoutingModule { }
