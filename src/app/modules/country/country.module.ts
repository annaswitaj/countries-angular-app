import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './components/country.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CountryComponent],
  imports: [SharedModule, CommonModule, MaterialModule, CountryRoutingModule],
})
export class CountryModule {}
