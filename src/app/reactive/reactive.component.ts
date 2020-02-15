import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {MyErrorStateMatcher} from './directive/errorStateMatcher';
import {checkPasswords} from './directive/checkPasswords.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  matcher: ErrorStateMatcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
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
      repeatedPassword: [''],
      region: ['', [Validators.required]],
      gender: [''],
      promo: [false],
      additional: ['']
    }, {validators: checkPasswords});
  }
}
