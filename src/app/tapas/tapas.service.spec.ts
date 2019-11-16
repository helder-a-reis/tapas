import { TestBed } from '@angular/core/testing';

import { TapaService } from './tapas.service';

describe('TapasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TapaService = TestBed.get(TapaService);
    expect(service).toBeTruthy();
  });
});
