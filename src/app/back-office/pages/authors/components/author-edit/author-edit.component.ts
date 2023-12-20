import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { Author } from '../../../../../shared/models/author.model';

@Component({
  standalone: true,
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss'],
  imports: [IonicModule, AsyncPipe, ReactiveFormsModule, KeyValuePipe],
})
export class AuthorEditComponent implements OnInit {
  form!: FormGroup;

  @Input()
  author!: Author;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.author.name, [Validators.required]],
    });
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
    console.log(this.form.value.name);
    return this.modalCtrl.dismiss(this.form.value, 'save');
  }
}
