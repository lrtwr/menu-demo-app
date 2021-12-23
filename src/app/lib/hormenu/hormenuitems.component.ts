import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
@Component({
  selector: 'HorSubMenuItem',
  template: `
<div class="{{classId}}-hor-submenu-item"><a [routerLink]="['+routerLink+']" class="menu-item-click hor-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a></div>
  `
})
export class HorSubMenuItemComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  @Input() routerLink: string | undefined;

  constructor() { }
  
  ngOnInit(): void {}}

// HrMenu-hor-submenu-item

@Component({
  selector: 'HorMenuItem',
  template: `
<div class="{{classId}}-hor-menu-item"><a [routerLink]="['+routerLink+']" class="menu-item-click hor-main-submenu-item"  href="#" id="{{id}}"><ng-content></ng-content></a></div>
  `
  })

export class HorMenuItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() id: string | undefined;
  @Input() routerLink: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

  @Component({
    selector: 'HorLogo',
    template: `
  <a [routerLink]="['+routerLink+']" class="{{classId}}-hor-logo {{classId}}-hor-menu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
    `
  })
  
  export class HorLogoComponent implements OnInit {
    @Input() classId: string | undefined="lt";
    @Input() id: string | undefined;
    @Input() routerLink: string | undefined;
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }