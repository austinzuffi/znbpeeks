import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'what'
})
export class WhatPipe implements PipeTransform {

  transform(value: any, args?: string): any {
      if (args)
        return args + value.name;
      return value.name;
  }

}
