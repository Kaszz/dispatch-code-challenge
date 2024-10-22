import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MetarComponent } from './components/weather/metar/metar.component';
import {FormsModule} from "@angular/forms";
import { TafComponent } from './components/weather/taf/taf.component';
import { FullComponent } from './components/weather/full/full.component';
import { WeatherReportDataItemComponent } from './components/weather/weather-report-data-item/weather-report-data-item.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { FlightRulesComponent } from './components/weather/flight-rules/flight-rules.component';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { LogsComponent } from './components/weather/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MetarComponent,
    TafComponent,
    FullComponent,
    WeatherReportDataItemComponent,
    DateFormatPipe,
    TimeAgoPipe,
    FlightRulesComponent,
    ToFahrenheitPipe,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
