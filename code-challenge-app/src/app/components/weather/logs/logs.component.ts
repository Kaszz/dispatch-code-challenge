import { Component, OnInit } from '@angular/core';
import {LogsService} from "../../../services/logs.service";
import {Observable} from "rxjs";
import {Report} from "../../../models/report";
import {Log} from "../../../models/log";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  public logs$!: Observable<Log[]>;

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.logs$ = this.logsService.getLogs();
  }

  protected readonly Math = Math;
}
