import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'lt-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {
  }

}
