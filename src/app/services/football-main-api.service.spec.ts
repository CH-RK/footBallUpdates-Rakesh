import { TestBed } from '@angular/core/testing';

import { FootballMainApiService } from './football-main-api.service';

describe('FootballMainApiService', () => {
  let service: FootballMainApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballMainApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
