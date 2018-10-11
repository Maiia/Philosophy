import {Action} from '@ngrx/store';

export const LOG_IN = '[AUTH] Log in';
export const LOG_OUT = '[AUTH] Log out';

export class LogIn implements Action {
  readonly type = LOG_IN;
}

export class LogOut implements Action {
  readonly type = LOG_OUT;
}

export type All
  = LogIn
    | LogOut;


