import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Книги', url: '/back-office/books', icon: 'book' },
    { title: 'Авторы', url: '/back-office/authors', icon: 'paper-plane' },
  ];
}
