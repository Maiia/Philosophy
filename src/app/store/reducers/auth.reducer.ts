import * as AuthActions from '../actions/auth.actions';
import { IAuth } from '../../interfaces/i-auth';

export type Action = AuthActions.All;

const defaultState = {
  'loggedIn': localStorage.getItem('userLoggedIn') === 'true' ? true : false
}

const newState = (state, newData) => Object.assign({}, state, newData);

export function authReducer(state = defaultState, action: Action) {
  console.log('AUTH', state, action.type);

  switch (action.type) {
    case AuthActions.LOG_IN:
      return newState(state, {loggedIn: true});

    case AuthActions.LOG_OUT:
      return newState(state, {loggedIn: false});

    default:
      return state;
  }
}
