import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.sass']
})
export class DropdownMenuComponent {
  @Input() title: string | undefined;
  constructor() { }



}
