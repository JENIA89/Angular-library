import { TestBed } from '@angular/core/testing';

import { ReaderService } from './pages/reader-page/reader.service';

describe('ReaderService', () => {
  let service: ReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
