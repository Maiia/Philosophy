import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mapTo} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import * as AuthActions from '../actions/auth.actions';


@Injectable()
export class AuthEffect {

  constructor(
    private actions$: Actions
  ) {
  }

  @Effect()
  public loginAction$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.LOG_IN),
    mapTo(new AuthActions.LogInSuccess())
  );

  @Effect()
  public logoutAction$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.LOG_OUT),
    mapTo(new AuthActions.LogOutSuccess())
  );
}
