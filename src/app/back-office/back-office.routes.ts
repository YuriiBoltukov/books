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
        loadComponent: () =>
          import('./pages/book-list/book-list.component').then(
            (m) => m.BookListComponent,
          ),
      },
      {
        path: 'authors',
        loadComponent: () =>
          import('./pages/author-list/author-list.component').then(
            (m) => m.AuthorListComponent,
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
