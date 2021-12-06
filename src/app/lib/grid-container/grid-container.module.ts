import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { GridContainerItemComponent } from './grid-container-item/grid-container-item.component';
import { GridItemComponent } from './grid-item/grid-item.component';



@NgModule({
  declarations: [
    GridContainerComponent,
    GridContainerItemComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridContainerComponent,
    GridContainerItemComponent,
    GridItemComponent
  ]
})
export class GridContainerModule { }
