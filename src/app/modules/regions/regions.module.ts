import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RegionsComponent } from './components/regions.component';

import { RegionsRoutingModule } from './regions-routing.module';

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    RegionsRoutingModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class RegionsModule {}
