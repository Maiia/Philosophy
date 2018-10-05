import {Action} from '@ngrx/store';
import {UserData} from '../../interfaces/i-auth';

export const LOG_IN = '[AUTH] Log in';
export const LOG_OUT = '[AUTH] Log out';
export const REGISTER = '[AUTH] REGISTER';

export class LogIn implements Action {
  readonly type = LOG_IN;
}

export class LogOut implements Action {
  readonly type = LOG_OUT;
}

export class Register implements Action {
  readonly type = REGISTER;

  constructor( public payload: any ) {}
}

export type All
  = LogIn
    | LogOut
    | Register;


