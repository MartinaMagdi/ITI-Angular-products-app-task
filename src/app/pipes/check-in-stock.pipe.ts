import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkInStock',
})
export class CheckInStockPipe implements PipeTransform {
  transform(value: number): string {
    return value ? 'In stock' : 'Out of stock';
  }
}
