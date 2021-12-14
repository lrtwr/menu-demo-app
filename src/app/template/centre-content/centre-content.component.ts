import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, of } from 'rxjs';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'content',
  templateUrl: './centre-content.component.html',
  styles: ['']
})
export class CentreContentComponent implements OnInit {

  constructor(public test: TestService) { }
  auto1: unknown =``;
  auto2: unknown =``;
  auto3: unknown =``;

  
  fiets: string =``;
  trein: string =``;

  ngOnInit(): void {
    this.test.getAuto1.subscribe(x=> {this.auto1=x;});

    of([1,2,3]).subscribe({complete: console.info});
    of([1,2,3]).subscribe({complete: console.info});
    of([1,2,3]).subscribe({complete: console.info});

    of([1,2,3]).subscribe((v) => console.info(v));
    of([1,2,3]).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    })

this.test.getAuto1.subscribe({next:(x)=>this.auto2=x})

    this.fiets= this.test.getFiets();
    this.trein= this.test.getTrein();
  }
}

