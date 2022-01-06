import { Injectable } from '@angular/core';
import jsondata from '../../../assets/form-test.database.json';
// import { list } from './form-test/form-test.database';
import { FormTest } from './form-test.model'
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class FormTestService {
  private jsondata: any[] = jsondata;
  private jsonlist: FormTest[] = [];



  constructor() {

    for (let item of jsondata) {
      this.jsonlist.push(new FormTest(item.id,item.name,item.genre,new Date(item.birthdate)));
    }
  }

  getList(): FormTest[] {
    return this.jsonlist;
  }

  getList2(): Observable<FormTest[]> {
    return new Observable(observer=>observer.next(this.jsonlist));
  }

}
