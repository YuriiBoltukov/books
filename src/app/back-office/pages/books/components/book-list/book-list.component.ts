import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookItemComponent } from '../book-item/book-item.component';
import { LoadingState } from '../../../../../shared/models/loading.model';
import { BooksService } from '../../services/books.service';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  imports: [AsyncPipe, IonicModule, BookItemComponent],
})
export class BookListComponent {
  loadingStateEnum = LoadingState;

  constructor(public booksService: BooksService) {}
}
