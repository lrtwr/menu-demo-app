import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetest'
})
export class PipeTestPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: Date, doubleTime = 4): string {
    let uit:string="";
    for(let x = 0;x<doubleTime;x++){
      uit+=value.toString();
    }
    return uit;
  }
}