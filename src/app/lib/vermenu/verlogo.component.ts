import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'VerLogo',
  template: `
<a class="{{classId}}-logo {{classId}}-menu-item" href="#" id="{{id}}"><ng-content></ng-content></a>
  `
})
export class VerLogoComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
