import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GENRE_DICTIONARY } from '../../../../../shared/constants/genre.dictionary';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { LANGUAGE_DICTIONARY } from '../../../../../shared/constants/language.dictionary';
import { AuthorsApiService } from '../../../../../shared/api/authors-api.service';
import { Observable, shareReplay, Subject, takeUntil } from 'rxjs';
import { Author } from '../../../../../shared/models/author.model';

@Component({
  standalone: true,
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, KeyValuePipe, AsyncPipe],
})
export class BookCreateComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  authors$!: Observable<Author[]>;

  _unSubscribe$: Subject<void> = new Subject<void>();

  dictionaries = {
    GENRE_DICTIONARY,
    LANGUAGE_DICTIONARY,
  };
  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private authorsApiService: AuthorsApiService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      author: [null, [Validators.required]],
      description: [null, [Validators.required, Validators.minLength(100)]],
      pages: [null, [Validators.required]],
      language: [null, [Validators.required]],
      genre: [null, [Validators.required]],
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

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Object.values(this.form.controls).forEach((control) =>
        control.markAsDirty(),
      );
      return;
    }
    return this.modalCtrl.dismiss(this.form.value, 'save');
  }
}
