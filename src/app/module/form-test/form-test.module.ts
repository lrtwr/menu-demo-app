import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormTestComponent } from './form-test.component';
import {PipeTestPipe} from './pipe-test.pipe'

const routes: Routes = [];

@NgModule({
  declarations: [FormTestComponent, PipeTestPipe],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FormTestModule { }
