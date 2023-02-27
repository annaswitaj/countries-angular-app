import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './components/region.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RegionRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class RegionModule {}
