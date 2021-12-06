import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
