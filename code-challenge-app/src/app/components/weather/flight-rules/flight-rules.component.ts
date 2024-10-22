import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-flight-rules',
  templateUrl: './flight-rules.component.html',
  styleUrls: ['./flight-rules.component.scss']
})
export class FlightRulesComponent {
  @Input() flightRule: string = '';
  @Input() showDot: boolean = true;
  @Input() showText: boolean = true;

  constructor() {
  }

}
