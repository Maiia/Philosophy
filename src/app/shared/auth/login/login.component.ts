import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersDataService } from '../../../services/users-data.service';
import * as AuthActions from '../../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../../interfaces/i-app-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  LoginReactiveForm: FormGroup;
  usersData$: Array<Object>;

  defaultData = {
    'loggedIn': true,
    'userData': {
      'name': 'Mojo',
      'password': 'MojoMojo',
      'email': 'mojoMojo@gmail.com'
    }
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usersDataService: UsersDataService,
    private store: Store<IAppStore>) {
  }

  ngOnInit() {
    this.usersDataService.getUsersData().subscribe(
      (data: any) => this.usersData$ = data,
      err => console.log('err users data', err)
    );

    this.LoginReactiveForm = this.fb.group({
      uLogin: new FormControl(''),
      uPassword: new FormControl('')
    });
  }

  onSubmit() {
    const controls = this.LoginReactiveForm.controls;

    const currentUser = this.usersData$.find(
      user => user['name'] === controls['uLogin'].value || user['email'] === controls['uLogin'].value
    );
    if (currentUser['password'] === controls['uPassword'].value) {
      this.store.dispatch(new AuthActions.LogIn() );

      localStorage.setItem('userLoggedIn', true);

      this.router.navigate(['/']);
    }

  }

}
