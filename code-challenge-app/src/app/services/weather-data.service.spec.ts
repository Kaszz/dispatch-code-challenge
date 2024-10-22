import { TestBed } from '@angular/core/testing';
import { WeatherDataService } from './weather-data.service';
import { Report } from '../models/report';
import {Observable} from "rxjs";

describe('WeatherDataService', () => {
  let service: WeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get weather data', () => {
    const mockReport: Report = {} as Report;
    service.setWeatherData(mockReport);

    service.getWeatherData().subscribe(data => {
      expect(data).toEqual(mockReport);
    });
  });

  it('should return an observable', () => {
    expect(service.getWeatherData()).toBeInstanceOf(Observable);
  });
});
