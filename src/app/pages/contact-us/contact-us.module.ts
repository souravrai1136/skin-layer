import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';

import { ContactUsPage } from './contact-us.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsPageRoutingModule,
    SharedModulesModule,
    SharedModulesModule,
    ReactiveFormsModule,
  ],
  declarations: [ContactUsPage],
})
export class ContactUsPageModule {}
