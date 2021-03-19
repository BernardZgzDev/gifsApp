import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string): string {
    
    if(value.trim().length > 32) {
      value = value.substr(0,32) + ' ...';
    }
    return value;
  }
}