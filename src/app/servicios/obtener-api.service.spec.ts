import { TestBed } from '@angular/core/testing';

import { ObtenerApiService } from './obtener-api.service';

describe('ObtenerApiService', () => {
  let service: ObtenerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
