import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartViewPageRoutingModule } from './cart-view-routing.module';

import { CartViewPage } from './cart-view.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartViewPageRoutingModule,
    SharedModulesModule,
  ],
  declarations: [CartViewPage]
})
export class CartViewPageModule {}
