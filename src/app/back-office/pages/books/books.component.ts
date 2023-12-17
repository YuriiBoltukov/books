import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksService } from './services/books.service';
import { BooksApiService } from './api/books-api.service';

@Component({
  standalone: true,
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [IonicModule, AsyncPipe, BookListComponent],
  providers: [BooksService, BooksApiService],
})
export class BooksComponent {
  constructor(public booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks();
  }
  addBook() {}
}
