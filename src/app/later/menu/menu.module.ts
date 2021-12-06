import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownMenuItemComponent } from './dropdown-menu-item/dropdown-menu-item.component';
import { DropdownSubmenuComponent } from './dropdown-submenu/dropdown-submenu.component'


@NgModule({
  declarations: [MainMenuComponent,
    MenuItemComponent,
    DropdownMenuComponent,
    DropdownMenuItemComponent,
    DropdownSubmenuComponent],
  exports: [MainMenuComponent,
    MenuItemComponent,
    DropdownMenuComponent,
    DropdownMenuItemComponent,
    DropdownSubmenuComponent]
  ,
  imports: [CommonModule]
})
export class MenuModule { }
