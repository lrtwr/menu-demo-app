import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerColumnComponent } from './grid-container-column/grid-container-column.component';
import { GridContainerComponent } from './grid-container/grid-container.component';



@NgModule({
  declarations: [
    GridContainerColumnComponent,
    GridContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridContainerColumnComponent,
    GridContainerComponent
  ]
})
export class GridContainerModule { }
