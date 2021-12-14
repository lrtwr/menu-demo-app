import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor() { }

  public getAuto1 = new Observable((terug) => {
    terug.next("Auto");
    terug.error("Tja geen auto");
        return { unsubscribe() { console.log("unsubscribed!") } }
      });



        public getAuto2(): Observable<string>{
          console.log('Im inside get:Auto');
          return of("Dit is een auto.");
        }



 

  public getAuto3 = new Observable((terug) => {
    terug.next("Auto");
    terug.error("Tja geen auto");
        return { unsubscribe() { console.log("unsubscribed!") } }
  })

  public getFiets() { console.log("gefietst");return "Fiets"; }
  public getTrein() { console.log("getreind");return "Trein"; }
}




