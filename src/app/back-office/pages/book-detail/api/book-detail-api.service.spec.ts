import { TestBed } from '@angular/core/testing';

import { BookDetailApiService } from './book-detail-api.service';

describe('BookDetailApiService', () => {
  let service: BookDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});