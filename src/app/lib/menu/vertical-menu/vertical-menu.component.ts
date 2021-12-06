import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lt-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
constructor() { }

  ngOnInit(): void {
  }

}
