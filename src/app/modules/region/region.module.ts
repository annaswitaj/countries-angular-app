import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './components/region.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegionComponent],
  imports: [CommonModule, RegionRoutingModule, HttpClientModule],
})
export class RegionModule {}
