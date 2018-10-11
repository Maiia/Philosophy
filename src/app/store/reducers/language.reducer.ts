import * as LanguageActions from '../actions/language.actions';

export type Action = LanguageActions.All;

export interface ILanguage {
  language: string;
  message: string;
}

const messages = {
  'en': 'Message in english (English)',
  'sp': 'Mensaje en ingles (Spanish)',
  'fr': 'Message en anglais (French)',
};

const defaultState = {
  'language': localStorage.getItem('language') || 'en'
};

Object.defineProperty(defaultState, 'message', {
  value: messages[defaultState['language']]
});

const newState = (state, newData) => Object.assign({}, state, newData);

export function languageReducer(state = defaultState, action: Action) {
  console.log('LANGUAGE', state, action.type);

  switch (action.type) {
    case LanguageActions.ENGLISH:
      return newState(state, {
        language: 'en',
        message: messages.en
      });

    case LanguageActions.SPANISH:
      return newState(state, {
        language: 'sp',
        message: messages.sp
      });

    case LanguageActions.FRENCH:
      return newState(state, {
        language: 'fr',
        message: messages.fr
      });

    default:
      return state;
  }
}
