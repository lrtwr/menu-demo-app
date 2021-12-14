import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'HorDropDownMenu',
  templateUrl: './dropdownmenu.component.html',
  styles: ['']
})
export class HorDropDownMenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {
  }

}
