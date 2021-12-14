import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'VerSubMenuItem',
  template: `
<a class="{{classId}}-ver-submenu-item ver-menu-item-click lt-menu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
})
export class VerSubMenuItemComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

@Component({
  selector: 'VerMenuItem',
  template: `
<a class="{{classId}}-ver-menu-item ver-menu-item-click ver-main-submenu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
  })

export class VerMenuItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() id: string | undefined;
  constructor() { }
  ngOnInit(): void {}}

