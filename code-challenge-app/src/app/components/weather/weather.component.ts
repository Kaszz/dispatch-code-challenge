import {Component} from '@angular/core';
import {WeatherReportService} from '../../services/weather-report.service';
import {WeatherDataService} from '../../services/weather-data.service';
import {Report} from '../../models/report';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  public icao: string = '';
  public isLoading: boolean = false;

  constructor(
    private weatherReportService: WeatherReportService,
    private weatherDataService: WeatherDataService
  ) {
  }

  getWeatherReport(): void {
    this.isLoading = true;
    this.weatherReportService.getWeatherReportThroughBackend(this.icao).subscribe({
      next: (result: Report) => {
        this.weatherDataService.setWeatherData(result);
        this.isLoading = false;
      },
      error: (err) => {
        this.weatherDataService.setWeatherData({} as Report);
        console.error('Error fetching weather report:', err);
        this.isLoading = false;
      }
    });
    this.icao = '';
  }
}
