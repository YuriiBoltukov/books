import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBase } from '../../../../shared/base-classes/api.base';
import { catchError, Observable } from 'rxjs';
import { BookDetail } from '../models/book-detail.model';

@Injectable({
  providedIn: 'root',
})
export class BookDetailApiService extends ApiBase {
  private bookUrl = 'assets/MOCK/book.mock.json';
  constructor(private http: HttpClient) {
    super();
  }

  getBookById(id: BookDetail['id']): Observable<BookDetail | null> {
    return this.http
      .get<BookDetail | null>(`${this.bookUrl}`) //`this.bookUrl/${id}`
      .pipe(catchError(this.handleError('getBookById', null)));
  }
}
