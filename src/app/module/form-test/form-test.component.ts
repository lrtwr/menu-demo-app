import { Component, OnInit } from '@angular/core';
// import { TestForm } from '../test-form.model';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormTestService } from '../form-test.service';
// import  data  from '../../../assets/form-test.database.json';
// import { list } from './form-test.database';
import { FormTestService } from './form-test.service';
import {PipeTestPipe} from './pipe-test.pipe'

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styles: ['']
})

export class FormTestComponent implements OnInit {
  public genres:string[]=["thriller","fantasy","drama"];
  // public dlist:any;
  public database:any;
  public lengte: number | undefined;

  constructor(private service:FormTestService) { }

  ngOnInit(): void {
    // this.dlist=this.service.getList();
    const serv=this.service.getList2();
    serv.subscribe(observer=>{this.database=observer})
    this.lengte= this.database.length;
  }
}

