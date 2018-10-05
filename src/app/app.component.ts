import { Component } from '@angular/core';
import { routerTransition } from './router.animations';
import { IAuth } from './interfaces/i-auth';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppStore } from './interfaces/i-app-store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ]
})

export class AppComponent {
  title = 'Philosophy';

  text: string;
  auth$: Observable<IAuth>;
  isAuthorized: boolean;

  constructor(
    private store: Store<IAppStore>
  ) {
    this.auth$ = this.store.select('auth');
    this.auth$.subscribe(
      result => this.isAuthorized = result.loggedIn
    );
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
