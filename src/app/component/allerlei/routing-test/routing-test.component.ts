import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { routes } from '../../../app-routing.array';
import {  DynamicObject } from '../../../lib/global-objects';

// declare var

@Component({
  selector: 'app-routing-test',
  templateUrl: './routing-test.component.html',
  styles: ['']
})
export class RoutingTestComponent implements OnInit {

  public rLijst: DynamicObject[]=[];
  public tLijst: DynamicObject[]=[];
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    // routes.forEach(x => { this.getRData(x,this.rLijst) });
  this.readConfig(router.config,this.tLijst);
  }

  readConfig(children:any,tLijst:DynamicObject[]){
    children.forEach((route: { data: { [x: string]: string; } | null; path: any; children: any; }) => {
      let breadcrumb:string|null=(route.data!=null)?route.data['breadcrumb']!=null?route.data['breadcrumb']:null:null;
      let opath:DynamicObject={path: route.path,breadcrumb: breadcrumb};
      let even:DynamicObject[];
      tLijst.push(opath);

       if (route.children) {
      even=[];
      opath['children']=even;
      this.readConfig(route.children,opath['children']);
    }
    });
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


  ngOnInit(): void {
  }

}
