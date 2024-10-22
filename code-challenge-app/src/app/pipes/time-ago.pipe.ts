import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }

    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const remainingMins = diffMins % 60;

    if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else {
      return `${diffHours}h ${remainingMins}m ago`;
    }
  }
}
