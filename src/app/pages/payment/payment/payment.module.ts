import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';
import { GooglePayButtonModule } from "@google-pay/button-angular";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
    SharedModulesModule,
    GooglePayButtonModule
  ],
  declarations: [PaymentPage],
})
export class PaymentPageModule {}
