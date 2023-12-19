import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { LoadingState } from '../../../../shared/models/loading.model';
import { BookDetail } from '../models/book-detail.model';
import { BookDetailApiService } from '../api/book-detail-api.service';

@Injectable({
  providedIn: 'root',
})
export class BookDetailService {
  private _book$: BehaviorSubject<BookDetail | null> =
    new BehaviorSubject<BookDetail | null>(null);

  private _loadingState$: BehaviorSubject<LoadingState> =
    new BehaviorSubject<LoadingState>(LoadingState.None);

  get book$() {
    return this._book$.asObservable();
  }

  get loadingState$() {
    return this._loadingState$.asObservable();
  }

  constructor(private bookDetailApiService: BookDetailApiService) {}

  getBookById(id: BookDetail['id']): void {
    this._loadingState$.next(LoadingState.Loading);
    this.bookDetailApiService
      .getBookById(id)
      .pipe(debounceTime(1000))
      .subscribe((book: BookDetail | null) => {
        this._book$.next(book);
        this._loadingState$.next(LoadingState.Success);
      });
  }
}
