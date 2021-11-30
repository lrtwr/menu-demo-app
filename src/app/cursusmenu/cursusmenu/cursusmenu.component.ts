import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cursusmenu',
  templateUrl: './cursusmenu.component.html',
  styleUrls: ['./cursusmenu.component.sass']
})
export class CursusMenuComponent {
  @HostBinding('style.display') public display = 'inline-block';
  @HostBinding('style.position') public position = 'absolute';
  constructor() { }
}
