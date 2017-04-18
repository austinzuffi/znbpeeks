import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jason'
})
export class JasonPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.json();
  }

}
