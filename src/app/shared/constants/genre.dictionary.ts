import { BookGenre } from '../models/genre.model';

export const GENRE_DICTIONARY = {
  [BookGenre.Fiction]: 'Фантастика',
  [BookGenre.Mystery]: 'Мистика',
  [BookGenre.Fantasy]: 'Фэнтези',
  [BookGenre.ScienceFiction]: 'Научная фантастика',
  [BookGenre.Romance]: 'Роман',
  [BookGenre.Horror]: 'Ужасы',
  [BookGenre.NonFiction]: 'Научная литература',
  [BookGenre.Biography]: 'Биография',
  [BookGenre.Poetry]: 'Поэзия',
  [BookGenre.HistoricalFiction]: 'Историческая проза',
  [BookGenre.Children]: 'Детская литература',
  [BookGenre.Young]: 'Юношеская литература',
  [BookGenre.Adult]: 'Литература для взрослых',
  [BookGenre.Thriller]: 'Триллер',
  [BookGenre.SelfHelp]: 'Саморазвитие',
  [BookGenre.Business]: 'Бизнесс',
  [BookGenre.Science]: 'Научная литература',
  [BookGenre.Travel]: 'Путешествия',
  [BookGenre.Cookbooks]: 'Кулинария',
  [BookGenre.Philosophy]: 'Философия',
  [BookGenre.Other]: 'Другое',
} as const;
