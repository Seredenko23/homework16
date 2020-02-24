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
import { ReactiveComponent } from './reactive.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';


@NgModule({
  declarations: [
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [ReactiveComponent],
  bootstrap: []
})
export class ReactiveModule { }
