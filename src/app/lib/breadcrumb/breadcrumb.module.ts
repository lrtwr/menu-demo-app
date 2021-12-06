import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbHomeComponent } from './breadcrumb-home/breadcrumb-home.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    BreadcrumbHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbItemComponent,
    BreadcrumbComponent,
    BreadcrumbHomeComponent
  ]
})
export class BreadcrumbModule { }
