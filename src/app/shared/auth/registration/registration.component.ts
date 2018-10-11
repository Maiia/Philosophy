import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IAuth, UserData} from '../../../interfaces/i-auth';
import {ValidationService} from '../../../services/validation.service';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../../interfaces/i-app-store';
import {Observable} from 'rxjs';
import * as AuthActions from '../../../store/actions/auth.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  RegistrationReactiveForm: FormGroup;
  auth$: Observable<IAuth>;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private store: Store<IAppStore>,
    private router: Router
  ) {
    this.RegistrationReactiveForm = fb.group({
      name: new FormControl('', [<any>Validators.required, ValidationService.nameValidator]),
      email: new FormControl('', [<any>Validators.required, ValidationService.emailValidator]),
      password: new FormControl('', [<any>Validators.required, ValidationService.passwordValidator])
    });
    this.auth$ = this.store.select('auth');
  }

  ngOnInit() {
  }

  onSubmit() {
    const controls = this.RegistrationReactiveForm.controls;

    if (this.RegistrationReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    const userData: any = {};
    Object.keys(this.RegistrationReactiveForm.controls).forEach(key => {
      userData[key] = this.RegistrationReactiveForm.get(key).value;
    });

    // this.http.post('http://httpbin.org/ip', userData);
    this.http.post('http://httpbin.org/ip', userData);

    this.store.dispatch(new AuthActions.LogIn());
    localStorage.setItem('userLoggedIn', 'true');
    this.router.navigate(['/']);
  }

}
