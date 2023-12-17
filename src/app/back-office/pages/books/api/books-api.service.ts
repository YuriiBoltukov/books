import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BooksApiService {
  private booksUrl = 'assets/MOCK/books.mock.json';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.booksUrl)
      .pipe(catchError(this.handleError('getBooks', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
