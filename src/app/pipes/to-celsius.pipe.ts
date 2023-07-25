import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelsius',
})
export class ToCelsiusPipe implements PipeTransform {
  transform(value: number): number {
    return +((value - 32) * (5 / 9)).toFixed(1);
  }
}
