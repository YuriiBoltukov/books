import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  imports: [ArrayToStringPipe, IonicModule],
})
export class BookItemComponent {
  @Input()
  book!: Book;
}
