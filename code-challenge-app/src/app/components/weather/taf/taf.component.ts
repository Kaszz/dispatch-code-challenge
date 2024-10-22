import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Report} from "../../../models/report";
import {WeatherDataService} from "../../../services/weather-data.service";

@Component({
  selector: 'app-taf',
  templateUrl: './taf.component.html',
  styleUrls: ['./taf.component.scss', '../weather.component.scss']
})
export class TafComponent implements OnInit {
  public weatherData$!: Observable<Report>;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherData$ = this.weatherDataService.getWeatherData();
  }

  public readonly Math = Math;
}
