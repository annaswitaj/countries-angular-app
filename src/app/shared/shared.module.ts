import { NgModule } from '@angular/core';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';

@NgModule({
  imports: [NumberSuffixPipe],
  exports: [NumberSuffixPipe],
  providers: [NumberSuffixPipe],
})
export class SharedModule {}
