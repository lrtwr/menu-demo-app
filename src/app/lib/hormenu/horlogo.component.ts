import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'HorLogo',
  template: `
<a class="{{classId}}-hor-logo {{classId}}-hor-menu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
})
export class HorLogoComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
