import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksService } from './services/books.service';
import { BooksApiService } from './api/books-api.service';
import { CreateBookComponent } from './components/create-book/create-book.component';

@Component({
  standalone: true,
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [IonicModule, AsyncPipe, BookListComponent],
  providers: [BooksService, BooksApiService, CreateBookComponent],
})
export class BooksComponent {
  constructor(
    public booksService: BooksService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.booksService.getBooks();
  }
  async addBook() {
    const modal = await this.modalCtrl.create({
      component: CreateBookComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      console.log('CONFIRM', data);
    }
  }
}
