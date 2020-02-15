import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveModule } from './reactive/reactive.module';
import {TemplateDrivenModule} from './template-driven/template-driven.module';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveModule,
    TemplateDrivenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
