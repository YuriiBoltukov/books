import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Author } from '../models/author.model';
import { ApiBase } from '../base-classes/api.base';

@Injectable({
  providedIn: 'root',
})
export class AuthorsApiService extends ApiBase {
  private authorsUrl = 'assets/MOCK/authors.mock.json';

  constructor(private http: HttpClient) {
    super();
  }

  getAuthors(): Observable<Author[]> {
    return this.http
      .get<Author[]>(this.authorsUrl)
      .pipe(catchError(this.handleError('getAuthors', [])));
  }
}
