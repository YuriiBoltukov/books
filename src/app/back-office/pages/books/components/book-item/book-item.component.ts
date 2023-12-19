import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { ArrayToStringPipe } from '../../../../../shared/pipe/array-to-string/array-to-string.pipe';
import { IonicModule, ModalController } from '@ionic/angular';
import { GENRE_DICTIONARY } from '../../../../../shared/constants/genre.dictionary';
import { TranslatePipe } from '../../../../../shared/pipe/translate/translate.pipe';
import { Router } from '@angular/router';
import { BookDetailComponent } from '../../../book-detail/book-detail.component';

@Component({
  standalone: true,
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  imports: [ArrayToStringPipe, IonicModule, TranslatePipe],
})
export class BookItemComponent {
  @Input()
  book!: Book;

  dictionary = GENRE_DICTIONARY;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) {}

  async openDetailModal() {
    const modal = await this.modalCtrl.create({
      component: BookDetailComponent,
      componentProps: {
        bookId: this.book.id,
      },
    });
    modal.present();
  }
}
