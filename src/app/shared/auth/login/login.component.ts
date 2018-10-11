import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UsersDataService } from '../../../services/users-data.service';
import * as AuthActions from '../../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../../interfaces/i-app-store';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { IAuth } from '../../../interfaces/i-auth';
import {ValidationService} from '../../../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  LoginReactiveForm: FormGroup;
  usersData$: Array<Object>;
  auth$: Observable<IAuth>;
  errorForm: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usersDataService: UsersDataService,
    private store: Store<IAppStore>) {
  }

  ngOnInit() {
    this.auth$ = this.store.select('auth');
    this.auth$.subscribe(
      data => {
        if (data.loggedIn) {
          this.router.navigate(['/']);
        }
      }
    )

    this.usersDataService.getUsersData().subscribe(
      (data: any) => this.usersData$ = data,
      err => console.log('err users data', err)
    );

    this.LoginReactiveForm = this.fb.group({
      login: new FormControl('', [<any>Validators.required]),
      password: new FormControl('', [<any>Validators.required])
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const controls = this.LoginReactiveForm.controls;

    if (this.LoginReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    const currentUser = this.usersData$.find(
      user => user['name'] === controls['login'].value || user['email'] === controls['login'].value
    );

    if (currentUser && currentUser['password'] === controls['uPassword'].value) {
      this.store.dispatch(new AuthActions.LogIn() );

      localStorage.setItem('userLoggedIn', 'true');
      this.router.navigate(['/']);

    } else {

      this.errorForm = true;
    }
  }
}
