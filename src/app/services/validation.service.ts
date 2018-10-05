import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    //TODO validation for minlength

    const config = {
      'symbols': 'You should use A-z symbols',
      'required': 'This field cannot be left blank',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'no_chosen': `You should chose something`
    };

    return config[validatorName];
  }

  static nameValidator(control) {
    const regexp = /[A-z]/;
    if (control.value && control.value.match(regexp)) {
      return null;
    } else {
      return { 'symbols': true };
    }
  }

  static emailValidator(control) {
    const regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value.match(regexp)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static messageValidator(control) {
    const regexp = /[A-z]/;
    if (control.value.match(regexp)) {
      return null;
    } else {
      return { 'symbols': true };
    }
  }

  static passwordValidator(control) {
    if (control.value.length > 5) {
      return null;
    } else {
      return { 'minlength': true };
    }
  }


  static checkboxHasValueValidator(control) {
    // console.log('control', control.indexOf(true) > -1, control);
    console.log('control', control.value.indexOf(true));
    if (control.value.indexOf(true) > -1) {
      return null;
    } else {
      return { 'no_chosen': true };
    }
  }

}
