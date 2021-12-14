import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorMenuComponent } from './hormenu/hormenu.component';
import { HorDropDownMenuComponent } from './dropdownmenu/dropdownmenu.component';
import { HorMenuItemComponent, HorSubMenuItemComponent } from './hormenuitems.component';
import { HorSubmenuComponent } from './submenu/submenu.component';
import { HorLogoComponent } from './horlogo.component';

@NgModule({
  declarations: [
    HorMenuComponent,
    HorDropDownMenuComponent,
    HorMenuItemComponent,
    HorSubMenuItemComponent,
    HorSubmenuComponent,

    HorLogoComponent
  ],
  exports: [
    HorMenuComponent,
    HorDropDownMenuComponent,
    HorMenuItemComponent,
    HorSubMenuItemComponent,
    HorSubmenuComponent,
    HorLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HorMenuModule {


}
