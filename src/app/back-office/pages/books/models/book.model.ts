import { BookGenre } from '../../../../shared/models/genre.model';

export interface Book {
  title: string;
  authors: string[];
  pages: number;
  language: string;
  genres: BookGenre[];
}
