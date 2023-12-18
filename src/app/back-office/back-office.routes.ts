import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'books',
      },
      {
        path: 'books',
        data: {
          title: 'Книги',
        },
        loadComponent: () =>
          import('./pages/books/books.component').then((m) => m.BooksComponent),
      },
      {
        path: 'authors',
        data: {
          title: 'Авторы',
        },
        loadComponent: () =>
          import('./pages/authors/authors.component').then(
            (m) => m.AuthorsComponent,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutes {}
