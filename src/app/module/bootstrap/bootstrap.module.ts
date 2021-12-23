import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component'

const routes: Routes = [
    {path: "bootstrap", component: BootstrapComponent, data: {breadcrumb: "Bootstrap"}}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BootstrapModule { }
