import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(values: string[]): string {
    return values.join(', ');
  }
}
