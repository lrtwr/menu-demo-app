import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'MainVerSubMenu',
  templateUrl: './mainversubmenu.component.html',
})
export class MainVerSubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {

  }

}
