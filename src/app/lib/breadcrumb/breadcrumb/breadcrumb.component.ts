import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: ['']
})
export class BreadcrumbComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
