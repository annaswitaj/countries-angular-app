import { NgModule } from '@angular/core';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { NotFoundCardComponent } from './not-found-card/not-found-card.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  imports: [NumberSuffixPipe, MaterialModule],
  exports: [NumberSuffixPipe, NotFoundCardComponent],
  providers: [NumberSuffixPipe],
  declarations: [NotFoundCardComponent],
})
export class SharedModule {}
