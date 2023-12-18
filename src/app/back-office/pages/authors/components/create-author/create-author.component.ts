import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AuthorsApiService } from '../../../../../shared/api/authors-api.service';
import { Observable, shareReplay, Subject, takeUntil } from 'rxjs';
import { Author } from '../../../../../shared/models/author.model';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AsyncPipe, KeyValuePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss'],
  imports: [IonicModule, ReactiveFormsModule, KeyValuePipe, AsyncPipe],
})
export class CreateAuthorComponent implements OnInit {
  form!: FormGroup;

  authors$!: Observable<Author[]>;

  _unSubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private authorsApiService: AuthorsApiService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
    });

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
