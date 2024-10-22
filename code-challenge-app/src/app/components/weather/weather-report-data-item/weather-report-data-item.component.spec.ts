import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportDataItemComponent } from './weather-report-data-item.component';

describe('WeatherReportDataItemComponent', () => {
  let component: WeatherReportDataItemComponent;
  let fixture: ComponentFixture<WeatherReportDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportDataItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
