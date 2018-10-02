import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ValidationService} from '../../../services/validation.service';

@Component({
  selector: 'app-control-input',
  templateUrl: './control-input.component.html',
  styleUrls: ['./control-input.component.scss']
})
export class ControlInputComponent implements OnInit {

  @Input() controlName: string;

  aaa = {};

  constructor() { }

  ngOnInit() {
    this.aaa = {
      [this.controlName]: new FormControl('', [<any>Validators.required, ValidationService.nameValidator])
    };
  }

}
