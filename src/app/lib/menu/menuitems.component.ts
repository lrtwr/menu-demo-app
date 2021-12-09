import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'SubMenuItem',
  template: `
<a class="{{classId}}-submenu-item lt-menu-item-click lt-menu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
})
export class SubMenuItemComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

@Component({
  selector: 'MenuItem',
  template: `
<a class="{{classId}}-menu-item lt-menu-item-click lt-main-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
  })

export class MenuItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() id: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

