import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerMenuComponent } from './vermenu/vermenu.component';
import { VerMenuItemComponent, VerSubMenuItemComponent, VerLogoComponent } from './vermenuitems.component';
import { VerSubmenuComponent } from './versubmenu/versubmenu.component';
import { VerMainSubmenuComponent } from './mainversubmenu/mainversubmenu.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    VerMenuComponent,
    VerMenuItemComponent,
    VerSubMenuItemComponent,
    VerMainSubmenuComponent,
    VerSubmenuComponent,
    VerLogoComponent
  ],
  exports: [
    VerMenuComponent,
    VerMenuItemComponent,
    VerSubMenuItemComponent,
    VerSubmenuComponent,
    VerMainSubmenuComponent,
    VerLogoComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class VerMenuModule {


}
