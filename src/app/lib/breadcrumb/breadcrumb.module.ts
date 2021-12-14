import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LtBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbHomeComponent } from './breadcrumb-home/breadcrumb-home.component';

@NgModule({
  declarations: [
    LtBreadcrumbComponent,
    BreadcrumbItemComponent,
    BreadcrumbHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbItemComponent,
    LtBreadcrumbComponent,
    BreadcrumbHomeComponent
  ]
})
export class LtBreadcrumbModule { }
