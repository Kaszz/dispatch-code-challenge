import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private weatherDataSubject: BehaviorSubject<Report> = new BehaviorSubject<Report>({} as Report);

  setWeatherData(data: Report) {
    this.weatherDataSubject.next(data);
  }

  getWeatherData(): Observable<Report> {
    return this.weatherDataSubject.asObservable();
  }
}
