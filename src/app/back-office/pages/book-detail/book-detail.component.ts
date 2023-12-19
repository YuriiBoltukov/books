import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { LoadingState } from '../../../shared/models/loading.model';
import { BookDetail } from './models/book-detail.model';
import { BookDetailService } from './book-detail-service/book-detail.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ArrayToStringPipe } from '../../../shared/pipe/array-to-string/array-to-string.pipe';
import { TranslatePipe } from '../../../shared/pipe/translate/translate.pipe';
import { GENRE_DICTIONARY } from '../../../shared/constants/genre.dictionary';

@Component({
  standalone: true,
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  imports: [
    IonicModule,
    AsyncPipe,
    JsonPipe,
    CommonModule,
    ArrayToStringPipe,
    TranslatePipe,
  ],
  providers: [BookDetailService],
})
export class BookDetailComponent implements OnInit {
  loadingStateEnum = LoadingState;

  @Input()
  bookId!: BookDetail['id'];

  dictionary = GENRE_DICTIONARY;

  constructor(
    private modalCtrl: ModalController,
    public bookDetailService: BookDetailService,
  ) {}

  ngOnInit() {
    this.bookDetailService.getBookById(this.bookId);
    this.bookDetailService.book$.subscribe((v) => console.log(v));
  }

  close() {
    return this.modalCtrl.dismiss();
  }
}
