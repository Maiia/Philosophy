import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contactsReactiveForm: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.contactsReactiveForm.controls;

    if (this.contactsReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

  }

  isControlInvalid(controlName: string): boolean {
    const control = this.contactsReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  initForm() {
    this.contactsReactiveForm = this.fb.group({
      cName:  new FormControl('', [<any>Validators.required, ValidationService.nameValidator]),
      cEmail: new FormControl('', [<any>Validators.required, ValidationService.emailValidator]),
      cWebsite: [null],
      cMessage: new FormControl('', [<any>Validators.required, ValidationService.messageValidator])
    });
  }

}
