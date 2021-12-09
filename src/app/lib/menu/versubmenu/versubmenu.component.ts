import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'VerSubMenu',
  templateUrl: './versubmenu.component.html',
})
export class VerSubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {

  }

}
