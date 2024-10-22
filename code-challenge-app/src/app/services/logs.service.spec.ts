import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LogsService} from "./logs.service";

describe('LogsService', () => {
  let service: LogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
