import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css']
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
