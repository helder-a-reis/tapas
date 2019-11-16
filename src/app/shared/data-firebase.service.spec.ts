import { TestBed } from '@angular/core/testing';

import { DataFirebaseService } from './data-firebase.service';

describe('DataFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFirebaseService = TestBed.get(DataFirebaseService);
    expect(service).toBeTruthy();
  });
});
