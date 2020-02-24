import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'template-driven-form',
    loadChildren: () => import('./template-driven/template-driven.module').then(m => m.TemplateDrivenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
