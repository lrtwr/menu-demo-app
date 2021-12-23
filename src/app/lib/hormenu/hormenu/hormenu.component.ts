import { HorMenuService } from '../hormenu.service';
import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, OnInit, Input} from '@angular/core';
import { HorDropDownMenuComponent } from '../dropdownmenu/dropdownmenu.component';
import { HorMenuItemComponent } from '../hormenuitems.component';

import { RouterLink,ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'HorMenu',
  templateUrl: './hormenu.component.html'
})
export class HorMenuComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  @ViewChild("vcrBefore", { read: ViewContainerRef }) vcrBefore: ViewContainerRef;
  @ViewChild("vcrAfter", { read: ViewContainerRef }) vcrAfter: ViewContainerRef;

  constructor(private service: HorMenuService) { }
  // addRouter(router){
  // }
  ngOnInit(): void {}

  // addMenuItem(classId) {
  //   let menuItem = new HorMenuItemComponent();
  //   menuItem.classId="";
  //   menuItem.id="";
  //   menuItem.routerLink="";
  //   this.service.addChild(this.vcrAfter,menuItem);
  // }

  deleteItem() {
    this.service.deleteChild(this.vcrAfter,HorDropDownMenuComponent);
  }
  

}
