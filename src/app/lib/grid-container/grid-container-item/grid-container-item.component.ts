import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-grid-container-item',
  templateUrl: './grid-container-item.component.html',
  styleUrls: ['./grid-container-item.component.css']
})
export class GridContainerItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
