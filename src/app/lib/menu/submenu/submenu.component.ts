import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lt-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() classId: string | undefined ="";
  constructor() { }

  ngOnInit(): void {

  }

}
