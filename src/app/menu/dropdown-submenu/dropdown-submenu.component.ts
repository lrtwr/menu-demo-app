import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-submenu',
  templateUrl: './dropdown-submenu.component.html',
  styleUrls: ['./dropdown-submenu.component.sass']
})
export class DropdownSubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
