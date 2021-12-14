import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerMenuComponent } from './vermenu/vermenu.component';
import { VerMenuItemComponent, VerSubMenuItemComponent } from './vermenuitems.component';
import { VerSubmenuComponent } from './versubmenu/versubmenu.component';
import { MainVerSubmenuComponent } from './mainversubmenu/mainversubmenu.component';
import { VerLogoComponent } from './verlogo.component';

@NgModule({
  declarations: [
    VerMenuComponent,
    VerMenuItemComponent,
    VerSubMenuItemComponent,
    MainVerSubmenuComponent,
    VerSubmenuComponent,
    VerLogoComponent
  ],
  exports: [
    VerMenuComponent,
    VerMenuItemComponent,
    VerSubMenuItemComponent,
    VerSubmenuComponent,
    MainVerSubmenuComponent,
    VerLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VerMenuModule {


}
