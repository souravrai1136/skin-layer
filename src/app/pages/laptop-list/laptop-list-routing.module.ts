import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptopListPage } from './laptop-list.page';

const routes: Routes = [
  {
    path: '',
    component: LaptopListPage,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptopListPageRoutingModule {}
