import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() id: string | undefined;
  @Input() style: string | undefined;
  @Input() widths: string | undefined;
  @Input() gap: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
