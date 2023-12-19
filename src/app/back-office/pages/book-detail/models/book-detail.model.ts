import { Book } from '../../books/models/book.model';

export interface BookDetail extends Book {
  description: string;
}
