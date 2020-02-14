import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateDrivenComponent} from './template-driven.component';
import {ReactiveComponent} from '../reactive/reactive.component';


@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [ TemplateDrivenComponent ],
  bootstrap: []
})
export class TemplateDrivenModule { }
