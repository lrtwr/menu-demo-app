import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {
@Input() classId: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
