import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Report} from "../models/report";

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {
  constructor(private http: HttpClient) { }

  getWeatherReport(icao: string): Observable<Report> {
    const headers: HttpHeaders = new HttpHeaders({
      'x-foreflight-odense': 'true'
    });

    return this.http.get<Report>('/weather/report/' + icao, { headers });
  }

  getWeatherReportThroughBackend(icao: string): Observable<Report> {
    return this.http.get<Report>('http://localhost:5265/WeatherReport/' + icao);
  }
}
