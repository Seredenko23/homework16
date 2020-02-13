import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioGroup,
  MatRadioModule, MatCheckboxModule
} from '@angular/material';
import { ReactiveComponent } from './reactive.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ReactiveComponent
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
  ],
  exports: [ReactiveComponent],
  bootstrap: []
})
export class ReactiveModule { }
