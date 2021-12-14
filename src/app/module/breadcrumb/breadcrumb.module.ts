import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    HomeComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
  ],
  exports: [
    BreadcrumbComponent,
    HomeComponent,
    UserComponent,
    UserListComponent
  ]
})
export class BreadcrumbModule { }
