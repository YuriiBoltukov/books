import { Component, OnInit } from '@angular/core';
import { book } from 'ionicons/icons';
import { BooksService } from '../../services/books.service';
import { AsyncPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BookItemComponent } from '../book-item/book-item.component';
import { LoadingState } from '../../../../../shared/models/loading.model';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  imports: [AsyncPipe, IonicModule, BookItemComponent],
})
export class BookListComponent implements OnInit {
  loadingStateEnum = LoadingState;

  constructor(public booksService: BooksService) {}

  ngOnInit() {
    this.booksService.books$.subscribe((r) => console.log(r));
  }

  protected readonly book = book;
}
