import { TestBed } from '@angular/core/testing';
import { BookDetailApiService } from './book-detail-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookDetailApiService', () => {
  let service: BookDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BookDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch a book by id', (done) => {
    const bookId = "1";

    service.getBookById(bookId).subscribe((result) => {
      expect(result).toBeTruthy();
      done();
    });
  });
});
