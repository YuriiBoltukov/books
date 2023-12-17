import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(values: string[], dictionary: { [key: string]: string }): string[] {
    return values.map((value) => dictionary[value]);
  }
}
