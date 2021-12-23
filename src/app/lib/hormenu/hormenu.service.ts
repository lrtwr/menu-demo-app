import { Injectable } from '@angular/core';
import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HorMenuService {
  private factory: ComponentFactory<any>;
  private componentRef:ComponentRef<any>;
  constructor(  private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  addChild(entry: ViewContainerRef, comp: any) {
    entry.clear();
    this.factory = this.resolver.resolveComponentFactory(comp);
    this.componentRef = entry.createComponent(this.factory);
  }

  deleteChild(entry: ViewContainerRef, comp: any) {
    entry.clear();
    this.factory = this.resolver.resolveComponentFactory(comp);
    this.componentRef = entry.createComponent(this.factory);
    this.componentRef.destroy();
  }
  
}
