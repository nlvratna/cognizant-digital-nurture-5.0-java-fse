import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true,
})
export class CreditLabelPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (!value || value === 0) {
      return 'No Credits';
    } else if (value === 1) {
      return '1 Credit';
    } else {
      return `${value} Credits`;
    }
  }
}
