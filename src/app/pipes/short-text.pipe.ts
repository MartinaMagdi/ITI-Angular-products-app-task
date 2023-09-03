import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string, length: number): string {
    return value.substring(0, length) + '...';
  }
}
