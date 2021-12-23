import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule, Routes } from '@angular/router';
import { UserResolverService } from './service/user-resolver.service';


const routes: Routes = [
 {
   path: 'users',
   component: UserListComponent,
   data: { breadcrumb: 'Users' },
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
  declarations: [
    BreadcrumbComponent,
    HomeComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [
    BreadcrumbComponent,
    HomeComponent,
    UserComponent,
    UserListComponent,
    [RouterModule]
  ]
})
export class BreadcrumbModule { }
