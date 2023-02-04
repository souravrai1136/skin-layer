import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomThemeUpoloadPageRoutingModule } from './custom-theme-upoload-routing.module';

import { CustomThemeUpoloadPage } from './custom-theme-upoload.page';
import { SharedModulesModule } from 'src/app/common/shared-modules/shared-modules.module';
import { FileUploadModule } from 'ng2-file-upload';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomThemeUpoloadPageRoutingModule,
    SharedModulesModule,
    FileUploadModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CustomThemeUpoloadPage],
})
export class CustomThemeUpoloadPageModule {}
