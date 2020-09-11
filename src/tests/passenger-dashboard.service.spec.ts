import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PassengerDashboardService } from '../app/passenger-dashboard/passenger-dashboard.service';

describe('PassengerDashboardService', () => {
  let service: PassengerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PassengerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
