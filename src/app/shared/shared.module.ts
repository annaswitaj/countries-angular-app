import { NgModule } from '@angular/core';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../modules/material/material.module';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [NumberSuffixPipe, MaterialModule, RouterModule],
  exports: [NumberSuffixPipe, NotFoundComponent, HeaderComponent],
  providers: [NumberSuffixPipe],
  declarations: [NotFoundComponent, HeaderComponent, HeaderComponent],
})
export class SharedModule {}
