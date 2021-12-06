import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcrumb-home',
  templateUrl: './breadcrumb-home.component.html',
  styleUrls: ['./breadcrumb-home.component.css']
})
export class BreadcrumbHomeComponent implements OnInit {
  @Input() classId: string | undefined;
  @Input() style: string | undefined;
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
