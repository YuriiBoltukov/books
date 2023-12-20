import { Injectable } from '@angular/core';
import { AuthorsApiService } from '../../../../shared/api/authors-api.service';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { Author } from '../../../../shared/models/author.model';
import { LoadingState } from '../../../../shared/models/loading.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private _authors$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>(
    [],
  );

  private _loadingState$: BehaviorSubject<LoadingState> =
    new BehaviorSubject<LoadingState>(LoadingState.None);

  get authors$() {
    return this._authors$.asObservable();
  }

  get loadingState$() {
    return this._loadingState$.asObservable();
  }

  constructor(private authorsApiService: AuthorsApiService) {}

  getAuthors() {
    this.authorsApiService
      .getAuthors()
      .pipe(debounceTime(1000))
      .subscribe((authors) => {
        this._authors$.next(authors);
        this._loadingState$.next(LoadingState.Success);
      });
  }
}
