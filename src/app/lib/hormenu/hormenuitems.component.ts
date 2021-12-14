import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'HorSubMenuItem',
  template: `
<a class="{{classId}}-hor-submenu-item hor-menu-item-click hor-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
})
export class HorSubMenuItemComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

@Component({
  selector: 'HorMenuItem',
  template: `
<a class="{{classId}}-hor-menu-item hor-menu-item-click hor-main-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
  })

export class HorMenuItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() id: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

