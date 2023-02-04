import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomThemeUpoloadPage } from './custom-theme-upoload.page';

const routes: Routes = [
  {
    path: '',
    component: CustomThemeUpoloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomThemeUpoloadPageRoutingModule {}
