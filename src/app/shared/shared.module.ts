import { NgModule } from '@angular/core';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { NotFoundCardComponent } from './not-found-card/not-found-card.component';
import { MaterialModule } from '../modules/material/material.module';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [NumberSuffixPipe, MaterialModule, RouterModule],
  exports: [NumberSuffixPipe, NotFoundCardComponent, HeaderComponent],
  providers: [NumberSuffixPipe],
  declarations: [NotFoundCardComponent, HeaderComponent, HeaderComponent],
})
export class SharedModule {}
