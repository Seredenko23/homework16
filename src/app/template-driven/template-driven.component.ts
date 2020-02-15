import {Component, ViewChild} from '@angular/core';
import {User} from './model/User';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  @ViewChild('form', null) form: NgForm;

  model: User = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    repeatedPassword: '',
    region: '',
    gender: '',
    promo: false,
    additional: '',
  };

  onSubmit() {
    console.log(this.form.value);
  }

  constructor() { }

}
