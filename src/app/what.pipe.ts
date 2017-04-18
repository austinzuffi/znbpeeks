import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'what'
})
export class WhatPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    return args + value.name;
  }

}
