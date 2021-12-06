import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
@Input() classId: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
