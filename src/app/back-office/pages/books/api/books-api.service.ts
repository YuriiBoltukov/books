import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Book } from '../models/book.model';
import { ApiBase } from '../../../../shared/base-classes/api.base';

@Injectable()
export class BooksApiService extends ApiBase {
  private booksUrl = 'assets/MOCK/books.mock.json';

  constructor(private http: HttpClient) {
    super();
  }

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.booksUrl)
      .pipe(catchError(this.handleError('getBooks', [])));
  }
}
