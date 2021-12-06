import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() classId: string | undefined ="jeroen";
  constructor() { }

  ngOnInit(): void {
  }

}
