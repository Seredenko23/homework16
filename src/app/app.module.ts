import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveModule } from './reactive/reactive.module';
import {TemplateDrivenModule} from './template-driven/template-driven.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveModule,
    TemplateDrivenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
