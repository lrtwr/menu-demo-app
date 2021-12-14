import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'HorSubMenu',
  templateUrl: './submenu.component.html',
  styles: ['']
})
export class HorSubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {

  }

}
