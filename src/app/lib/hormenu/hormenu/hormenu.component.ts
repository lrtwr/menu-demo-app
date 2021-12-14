import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'HorMenu',
  templateUrl: './hormenu.component.html'
})
export class HorMenuComponent implements OnInit {
  // @Input() title: string | undefined;
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {

  }

}
