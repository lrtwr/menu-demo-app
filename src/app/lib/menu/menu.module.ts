import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubMenuItemComponent } from './submenu-item/submenu-item.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { MainSubmenuComponent } from './main-submenu/main-submenu.component';
import { EvenComponent } from '../even/even.component';
import { LogoComponent } from '../logo/logo.component';


@NgModule({
  declarations: [
    HorizontalMenuComponent,
    VerticalMenuComponent,
    DropdownMenuComponent,
    MenuItemComponent,
    SubMenuItemComponent,
    SubmenuComponent,
    MainSubmenuComponent,
    EvenComponent,
    LogoComponent
  ],
  exports: [
    HorizontalMenuComponent,
    VerticalMenuComponent,
    DropdownMenuComponent,
    MenuItemComponent,
    SubMenuItemComponent,
    MainSubmenuComponent,
    SubmenuComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ltMenuModule { }
