import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'VerSubMenuItem',
  template: `
<a [routerLink]="['+routerLink+']" class="{{classId}}-ver-submenu-item menu-item-click ver-main-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
})
export class VerSubMenuItemComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  @Input() routerLink: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

@Component({
  selector: 'VerMenuItem',
  template: `
<a [routerLink]="['+routerLink+']" class="{{classId}}-ver-menu-item menu-item-click ver-main-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
  })

export class VerMenuItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() id: string | undefined;
  @Input() routerLink: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

  @Component({
    selector: 'VerLogo',
    template: `
  <a class="{{classId}}-logo {{classId}}-menu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
    `
  })
  export class VerLogoComponent implements OnInit {
    @Input() classId: string | undefined="lt";
    @Input() id: string | undefined;
    @Input() routerLink: string | undefined;
    constructor() { }
  
    ngOnInit(): void {
    }
  }