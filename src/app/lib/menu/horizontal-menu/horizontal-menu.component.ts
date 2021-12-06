import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'lt-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {
  // @Input() title: string | undefined;
  @Input() classId: string | undefined ="";
  constructor() { }

  ngOnInit(): void {

  }

}
