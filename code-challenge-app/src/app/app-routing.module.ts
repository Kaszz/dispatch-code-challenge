import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import {MetarComponent} from "./components/weather/metar/metar.component";
import {TafComponent} from "./components/weather/taf/taf.component";
import {FullComponent} from "./components/weather/full/full.component";
import {LogsComponent} from "./components/weather/logs/logs.component";

const routes: Routes = [
  { path: "", redirectTo: "weather", pathMatch: "full" },
  { path: 'weather', component: WeatherComponent, children: [
      { path: 'metar', component: MetarComponent },
      { path: 'taf', component: TafComponent },
      { path: 'full', component: FullComponent },
      { path: 'logs', component: LogsComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
