import {Action} from '@ngrx/store';

export const LOG_IN = '[AUTH] Log in';
export const LOG_IN_SUCCESS = '[AUTH] Log in success';
export const LOG_OUT = '[AUTH] Log out';
export const LOG_OUT_SUCCESS = '[AUTH] Log out success';

export class LogIn implements Action {
  readonly type = LOG_IN;
}

export class LogInSuccess implements Action {
  readonly type = LOG_IN_SUCCESS;
}

export class LogOut implements Action {
  readonly type = LOG_OUT;
}

export class LogOutSuccess implements Action {
  readonly type = LOG_OUT_SUCCESS;
}

export type All
  = LogIn
    | LogInSuccess
    | LogOut
    | LogOutSuccess;


