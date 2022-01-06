import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CentreContentComponent } from './centre-content/centre-content.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';


const routes: Routes = [];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CentreContentComponent,
    LeftContentComponent,
    RightContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CentreContentComponent,
    LeftContentComponent,
    RightContentComponent
  ]
})
export class TemplateModule { }
