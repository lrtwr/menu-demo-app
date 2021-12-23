import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'VerMainSubMenu',
  templateUrl: './mainversubmenu.component.html',
})
export class VerMainSubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {

  }

}
