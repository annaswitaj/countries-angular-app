import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './components/country.component';

@NgModule({
  declarations: [CountryComponent],
  imports: [CommonModule, CountryRoutingModule],
})
export class CountryModule {}
