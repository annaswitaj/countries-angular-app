import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './components/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RegionRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class RegionModule {}
