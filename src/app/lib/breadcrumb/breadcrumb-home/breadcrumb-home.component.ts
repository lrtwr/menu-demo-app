import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcrumb-home',
  templateUrl: './breadcrumb-home.component.html',
  styles: ['']
})
export class BreadcrumbHomeComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
