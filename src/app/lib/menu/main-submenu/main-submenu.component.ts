import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lt-main-submenu',
  templateUrl: './main-submenu.component.html',
  styleUrls: ['./main-submenu.component.css']
})
export class MainSubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
 constructor() { }

  ngOnInit(): void {

  }

}
