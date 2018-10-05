import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserData } from '../../../interfaces/i-auth';
import {ValidationService} from '../../../services/validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  RegistrationReactiveForm: FormGroup;

  defaultData = {
    'userData': {
      'name': 'Mojo',
      'password': 'MojoMojo',
      'email': 'mojoMojo@gmail.com'
    }
  };

  constructor(private fb: FormBuilder) {
    this.RegistrationReactiveForm = fb.group({
      name: new FormControl('', [<any>Validators.required, ValidationService.nameValidator]),
      email: new FormControl('', [<any>Validators.required, ValidationService.emailValidator]),
      password: new FormControl('', [<any>Validators.required, ValidationService.passwordValidator])
    });
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
    this.defaultData.userData = userData;
    console.log('IS EQ 1', this.defaultData.userData);
  }

}
