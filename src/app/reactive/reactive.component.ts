import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    console.log(this.form);
  }

  onSubmit() {
    console.log(this.form);
  }

  initForm() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')]],
      userName: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      repeatedPassword: ['', [Validators.required]],
      region: ['', [Validators.required]],
      gender: [''],
      promo: [false],
      additional: ['']
    });
  }
}
