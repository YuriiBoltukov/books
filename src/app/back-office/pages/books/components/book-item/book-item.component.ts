import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { IonicModule } from '@ionic/angular';
import { GENRE_DICTIONARY } from '../../../../../shared/constants/genre.dictionary';
import { TranslatePipe } from './translate.pipe';

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
}
