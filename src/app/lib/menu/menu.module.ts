import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorMenuComponent } from './hormenu/hormenu.component';
import { VerMenuComponent } from './vermenu/vermenu.component';
import { DropdownMenuComponent } from './dropdownmenu/dropdownmenu.component';
import { MenuItemComponent, SubMenuItemComponent } from './menuitems.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { VerSubmenuComponent } from './versubmenu/versubmenu.component';
import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [
    HorMenuComponent,
    VerMenuComponent,
    DropdownMenuComponent,
    MenuItemComponent,
    SubMenuItemComponent,
    SubmenuComponent,
    VerSubmenuComponent,
    LogoComponent
  ],
  exports: [
    HorMenuComponent,
    VerMenuComponent,
    DropdownMenuComponent,
    MenuItemComponent,
    SubMenuItemComponent,
    VerSubmenuComponent,
    SubmenuComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ltMenuModule {


}
