import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj<HttpClient>(["get"]);
    httpClientSpy.get.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load weather for KCPR', () => {
    // Arrange
    const response = { report: { conditions: { ident: "kcpr", tempC: 42 } } };
    httpClientSpy.get.and.returnValue(of(response));
    component.icao = 'KCPR';

    // Act
    component.getWeatherReport();
    fixture.detectChanges();

    // Assert
    expect(httpClientSpy.get).toHaveBeenCalledWith("http://localhost:5265/WeatherReport/KCPR");
  });
});
