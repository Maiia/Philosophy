import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IAuth} from '../interfaces/i-auth';
import {Store} from '@ngrx/store';
import {IAppStore} from '../interfaces/i-app-store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  auth$: Observable<IAuth>;

  constructor(
    private router: Router,
    private store: Store<IAppStore>
  ) {
    this.auth$ = this.store.select('auth');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    let log = localStorage.getItem('userLoggedIn');
    if (log) {
      return true;
    }
    return false;
    // this.auth$.subscribe(result => {
    //   if (result.loggedIn) {
    //     return true;
    //   }
    //
    //   this.router.navigate(['/login']);
    //   return false;
    // });
  }
}
