import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Route, Router } from '@angular/router';
import { routes } from './app-routing.array';
import { GlobalObjects, DynamicObject,PageObject } from './lib/global-objects';

// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    app-breadcrumb {
    display: inline-block;
  }
  `]
})

export class AppComponent implements OnInit {
  title = 'menu-demo-app';

  public rLijst: DynamicObject[]=[];

  constructor(public router: Router) {
    routes.forEach(x => { this.getRData(x,this.rLijst) });
  }

  getRData(x: Route, rLijst:DynamicObject[]) {
    let breadcrumb:string=(x.data!=null)?x.data['breadcrumb']!=null?x.data['breadcrumb']:null:null;
    let opath:DynamicObject={path: x.path,breadcrumb: breadcrumb};
    let even:DynamicObject[];
    rLijst.push(opath);
    if (x.children) {
      even=[];
      opath['children']=even;
      x.children.forEach(y => {
        this.getRData(y,opath['children']);
      });
    }
  }

  ngOnInit() { }
}
