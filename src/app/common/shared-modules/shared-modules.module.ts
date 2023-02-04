import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { ProductViewDetailsComponent } from '../components/product-view-details/product-view-details.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, ProductViewDetailsComponent, FooterComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [HeaderComponent, ProductViewDetailsComponent, FooterComponent],
})
export class SharedModulesModule {}
