import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    const config = {
      'symbols': 'You should use A-z symbols',
      'required': 'This field cannot be left blank',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`
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

}