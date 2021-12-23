import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { StagingComponent } from '../../staging/staging.component';
import { HorMenuService } from '../../../lib/hormenu/hormenu.service';

@Component({
  selector: 'app-childcreate',
  templateUrl: './childcreate.component.html',
  styleUrls: ['./childcreate.component.css']
})

export class ChildcreateComponent implements OnInit {
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private service: HorMenuService) { }

  ngOnInit(): void {
  }

  addChild() {
    this.service.addChild(this.entry,StagingComponent);
  }

  deleteChild() {
    this.service.deleteChild(this.entry,StagingComponent);
  }

}



