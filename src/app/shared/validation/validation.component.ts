import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})

export class ValidationComponent {
  @Input() control: FormControl;

  constructor() {
  }

  get errorMessage() {
    if (this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
      return null;
    }
  }

}
