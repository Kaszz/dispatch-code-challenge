import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-report-data-item',
  templateUrl: './weather-report-data-item.component.html',
  styleUrls: ['./weather-report-data-item.component.scss']
})
export class WeatherReportDataItemComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() isFlightRule: boolean = false;

  constructor() { }

}
