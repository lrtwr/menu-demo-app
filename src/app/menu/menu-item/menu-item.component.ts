import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.sass']
})
export class MenuItemComponent {
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
