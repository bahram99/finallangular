import { TestBed } from '@angular/core/testing';

import { MiloService } from './milo.service';

describe('MiloService', () => {
  let service: MiloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
