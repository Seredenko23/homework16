import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveComponent} from './reactive/reactive.component';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';

const routes: Routes = [
  { path: 'reactive-form', component: ReactiveComponent},
  { path: 'template-driven-form', component: TemplateDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
