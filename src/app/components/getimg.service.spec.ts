import { TestBed } from '@angular/core/testing';

import { GetimgService } from './getimg.service';

describe('GetimgService', () => {
  let service: GetimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
