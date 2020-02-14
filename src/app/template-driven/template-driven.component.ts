import { Component, OnInit } from '@angular/core';
import {User} from './model/User';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

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
    console.log(this.model);
  }
  constructor() { }

}
