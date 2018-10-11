import {Action} from '@ngrx/store';

export const ENGLISH = '[LANGUAGE] English';
export const SPANISH = '[LANGUAGE] Spanish';
export const FRENCH = '[LANGUAGE] French';

export class EnglishLang implements Action {
  readonly type = ENGLISH;
}

export class SpanishLang implements Action {
  readonly type = SPANISH;
}

export class FrenchLang implements Action {
  readonly type = FRENCH;
}

export type All
  = EnglishLang
  | SpanishLang
  | FrenchLang;
