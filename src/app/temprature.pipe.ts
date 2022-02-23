import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temprature'
})
export class TempraturePipe implements PipeTransform {

  transform(value: number, unit:string): number {
    if(value && !isNaN(value)){
      if(unit === 'C'){
       var temprature = (value - 32) * 5/9;
       return temprature; 
      }
      else if(unit === 'F'){
       var temprature = (value * 9/5) + 32;
       return temprature;
      }
    }
    return 0;
  }

}
