import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptopListPageRoutingModule } from './laptop-list-routing.module';

import { LaptopListPage } from './laptop-list.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptopListPageRoutingModule,
    SharedModulesModule,
  ],
  declarations: [LaptopListPage],
})
export class LaptopListPageModule {}
