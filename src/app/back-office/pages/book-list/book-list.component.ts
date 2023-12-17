import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  imports: [IonicModule, AsyncPipe],
})
export class BookListComponent {
  addBook() {}
}
