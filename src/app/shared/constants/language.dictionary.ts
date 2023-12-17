import { Language } from '../models/language.model';

export const LANGUAGE_DICTIONARY = {
  [Language.Russian]: 'Русский',
  [Language.English]: 'Английский',
  [Language.Spanish]: 'Испанский',
  [Language.German]: 'Немецкий',
  [Language.French]: 'Французский',
  [Language.Japanese]: 'Японский',
  [Language.Polish]: 'Польский',
  [Language.Turkish]: 'Турецкий',
  [Language.Swedish]: 'Швецкий',
  [Language.Greek]: 'Греческий',
  [Language.Portuguese]: 'Португальский',
} as const;
