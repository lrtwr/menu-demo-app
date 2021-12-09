import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'VerMenu',
  templateUrl: './vermenu.component.html',
  styles: ['']
})
export class VerMenuComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
constructor() { }

  ngOnInit(): void {
  }

}
