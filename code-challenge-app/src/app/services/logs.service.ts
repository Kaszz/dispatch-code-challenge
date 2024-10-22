import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Log} from "../models/log";

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  constructor(private http: HttpClient) {
  }

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>('http://localhost:5265/RequestLog');
  }
}
