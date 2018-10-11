import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { IAuth } from '../interfaces/i-auth';
import { Store } from '@ngrx/store';
import { switchMap, catchError, filter, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private store: Store<IAuth>) {}

  canActivate(): Observable<boolean> {
    console.log('this.checkStore()', this.checkStore());
    const aaa = this.checkStore()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
    console.log('aaa', aaa);
    return aaa;
  }

  checkStore(): Observable<any> {
    return this.store
      .select('auth')
      .pipe(
        filter((data: any) => data.loggedIn),
        take(1)
      );
  }
}
