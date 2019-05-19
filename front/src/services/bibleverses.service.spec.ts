import { TestBed } from '@angular/core/testing';

import { BibleVersesService } from './bibleverses.service';

describe('BibleversesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibleVersesService = TestBed.get(BibleVersesService);
    expect(service).toBeTruthy();
  });
});
