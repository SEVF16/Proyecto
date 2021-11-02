import { TestBed } from '@angular/core/testing';

import { GetseccionService } from './getseccion.service';

describe('GetseccionService', () => {
  let service: GetseccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetseccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
