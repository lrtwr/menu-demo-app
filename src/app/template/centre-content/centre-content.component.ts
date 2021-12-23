import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, of } from 'rxjs';

@Component({
  selector: 'centre-content',
  templateUrl: './centre-content.component.html',
  styles: ['']
})
export class CentreContentComponent implements OnInit {

  constructor() { }
  auto1: unknown =``;
  auto2: unknown =``;
  auto3: unknown =``;

  
  fiets: string =``;
  trein: string =``;

  ngOnInit(): void {
 

    of([1,2,3]).subscribe({complete: console.info});
    of([1,2,3]).subscribe({complete: console.info});
    of([1,2,3]).subscribe({complete: console.info});

    of([1,2,3]).subscribe((v) => console.info(v));
    of([1,2,3]).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    })
  }
}

