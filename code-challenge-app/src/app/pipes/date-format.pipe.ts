import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'America/Chicago',
      timeZoneName: 'short'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
