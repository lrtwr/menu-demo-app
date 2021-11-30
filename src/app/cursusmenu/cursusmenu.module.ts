import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursusMenuComponent } from './cursusmenu/cursusmenu.component';
import { CursusMenuItemComponent } from './menu-item/cursusmenu-item.component';


@NgModule({
  declarations: [CursusMenuComponent, CursusMenuItemComponent],
  exports: [CursusMenuComponent, CursusMenuItemComponent],
  imports: [CommonModule]
})
export class CursusMenuModule { }
