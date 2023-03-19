import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCvFormPage } from './create-cv-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCvFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCvFormPageRoutingModule {}
