import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
}                                                      from '@angular/forms';
import { GENRE_DICTIONARY }                            from '../../../../../shared/constants/genre.dictionary';
import { LANGUAGE_DICTIONARY }                         from '../../../../../shared/constants/language.dictionary';
import { Observable, shareReplay, Subject, takeUntil } from 'rxjs';
import { Author }                                      from '../../../../../shared/models/author.model';
import { AuthorsApiService }                           from '../../../../../shared/api/authors-api.service';
import { AsyncPipe, KeyValuePipe }                     from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: [ './filter-modal.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, KeyValuePipe, AsyncPipe],
})
export class FilterModalComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  authors$!: Observable<Author[]>;

  _unSubscribe$: Subject<void> = new Subject<void>();
  constructor(
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private authorsApiService: AuthorsApiService,
  ) {}
  dictionaries = {
    GENRE_DICTIONARY,
    LANGUAGE_DICTIONARY,
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      author: [null],
      pagesFrom: [null, [Validators.min(0)]],
      pagesTo: [null, [Validators.min(0)]],
      language: [null],
      genre: [null],
    });

    this.form.valueChanges.subscribe((v) => console.log(v));

    this.authors$ = this.authorsApiService
      .getAuthors()
      .pipe(shareReplay(1), takeUntil(this._unSubscribe$));
  }

  ngOnDestroy(): void {
    this._unSubscribe$.next();
    this._unSubscribe$.complete();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.form.value);
    return this.modalCtrl.dismiss(this.form.value, 'confirm');
  }
}
