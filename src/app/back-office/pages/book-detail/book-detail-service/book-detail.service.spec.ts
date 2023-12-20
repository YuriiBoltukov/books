import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BookDetailService }        from './book-detail.service';
import { BookDetailApiService } from '../api/book-detail-api.service';
import { of, throwError }       from 'rxjs';
import { LoadingState }         from '../../../../shared/models/loading.model';

describe('BookDetailService', () => {
  let service: BookDetailService;
  let bookDetailApiServiceSpy: jasmine.SpyObj<BookDetailApiService>;

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
  it('should set loading state to Loading when getBookById is called', () => {
    const bookId = '1';
    bookDetailApiServiceSpy.getBookById.and.returnValue(of(null));

    service.getBookById(bookId);

    service.loadingState$.subscribe((loadingState) => {
      expect(loadingState).toBe(LoadingState.Loading);
    });
  });

  it('should set loading state to Success and update book$ when getBookById is successful', fakeAsync(() => {
    const bookId = '1';
    const mockBook = { id: '1', title: 'Test Book' };
    // @ts-ignore
    bookDetailApiServiceSpy.getBookById.and.returnValue(of(mockBook));

    service.getBookById(bookId);
    tick(1000); // debounceTime

    service.loadingState$.subscribe((loadingState) => {
      expect(loadingState).toBe(LoadingState.Success);
    });

    service.book$.subscribe((book) => {
      // @ts-ignore
      expect(book).toEqual(mockBook);
    });
  }));

  it('should set loading state to Error when getBookById returns an error', fakeAsync(() => {
    const bookId = '1';
    bookDetailApiServiceSpy.getBookById.and.returnValue(throwError('Error'));

    service.getBookById(bookId);
    tick(1000); // debounceTime

    service.loadingState$.subscribe((loadingState) => {
      expect(loadingState).toBe(LoadingState.Error);
    });
  }));
});
