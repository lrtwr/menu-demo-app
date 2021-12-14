import { Component, Input, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'hormenu',
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
