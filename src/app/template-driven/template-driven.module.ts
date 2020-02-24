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
import {CommonModule} from '@angular/common';
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';

@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule ,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    TemplateDrivenRoutingModule
  ],
  exports: [ TemplateDrivenComponent ],
  bootstrap: []
})
export class TemplateDrivenModule { }
