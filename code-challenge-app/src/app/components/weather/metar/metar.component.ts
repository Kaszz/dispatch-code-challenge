import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDataService } from '../../../services/weather-data.service';
import { Report } from '../../../models/report';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss', '../weather.component.scss']
})
export class MetarComponent implements OnInit {
  public weatherData$!: Observable<Report>;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherData$ = this.weatherDataService.getWeatherData();
  }

  public readonly Math = Math;
}
