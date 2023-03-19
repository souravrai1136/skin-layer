import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCvFormPageRoutingModule } from './create-cv-form-routing.module';

import { CreateCvFormPage ,} from './create-cv-form.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

SharedModulesModule;
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCvFormPageRoutingModule,
    SharedModulesModule,
    ReactiveFormsModule,
    AngularEditorModule,
  ],
  declarations: [CreateCvFormPage],
})
export class CreateCvFormPageModule {}
