import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu-item',
  templateUrl: './dropdown-menu-item.component.html',
  styleUrls: ['./dropdown-menu-item.component.sass']
})
export class DropdownMenuItemComponent {
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
