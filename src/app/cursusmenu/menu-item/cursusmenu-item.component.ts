import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-cursusmenu-item',
  templateUrl: './cursusmenu-item.component.html',
  styleUrls: ['./cursusmenu-item.component.sass']
})
export class CursusMenuItemComponent {
  @Input() public menuFor: TemplateRef<any> | undefined;
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) public viewContainerRef: ViewContainerRef | any;

  constructor() { }

  public onClick(): void {
    this.addTemplateToContainer(this.menuFor)
  }
  addTemplateToContainer(menuFor: TemplateRef<any> | any): void {
    this.viewContainerRef?.createEmbeddedView(menuFor)
  }
}
