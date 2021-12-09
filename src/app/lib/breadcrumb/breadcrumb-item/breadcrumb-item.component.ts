import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lt-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styles: ['']
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
