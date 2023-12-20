import { TestBed } from '@angular/core/testing';
import { BookDetailService } from './book-detail.service';
import { BookDetailApiService } from '../api/book-detail-api.service';

describe('BookDetailService', () => {
  let service: BookDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: BookDetailApiService,
          useValue: { getBookById: (id: string) => {} },
        },
      ],
    });
    service = TestBed.inject(BookDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
