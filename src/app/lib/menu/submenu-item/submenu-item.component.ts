import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-submenu-item',
  templateUrl: './submenu-item.component.html',
  styleUrls: ['./submenu-item.component.css']
})
export class SubMenuItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
