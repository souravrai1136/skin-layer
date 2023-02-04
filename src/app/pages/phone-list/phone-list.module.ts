import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneListPageRoutingModule } from './phone-list-routing.module';

import { PhoneListPage } from './phone-list.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneListPageRoutingModule,
    SharedModulesModule,
  ],
  declarations: [
    PhoneListPage
  ],
})
export class PhoneListPageModule {}
