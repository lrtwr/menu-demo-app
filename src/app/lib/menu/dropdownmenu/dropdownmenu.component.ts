import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dropdownmenu',
  templateUrl: './dropdownmenu.component.html',
  styles: ['']
})
export class DropdownMenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {
  }

}
