import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { Book } from '../models/book.model';
import { LoadingState } from '../../../../shared/models/loading.model';
import { BooksApiService } from '../api/books-api.service';

@Injectable()
export class BooksService {
  private _books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  private _loadingState$: BehaviorSubject<LoadingState> =
    new BehaviorSubject<LoadingState>(LoadingState.None);

  get books$() {
    return this._books$.asObservable();
  }

  get loadingState$() {
    return this._loadingState$.asObservable();
  }

  constructor(private booksApiService: BooksApiService) {}

  getBooks() {
    this._loadingState$.next(LoadingState.Loading);
    this.booksApiService
      .getBooks()
      .pipe(debounceTime(1000))
      .subscribe((books) => {
        this._books$.next(books);
        this._loadingState$.next(LoadingState.Success);
      });
  }
}
