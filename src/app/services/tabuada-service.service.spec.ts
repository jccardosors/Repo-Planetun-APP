import { TestBed } from '@angular/core/testing';

import { TabuadaServiceService } from './tabuada-service.service';

describe('TabuadaServiceService', () => {
  let service: TabuadaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabuadaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
