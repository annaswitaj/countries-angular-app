import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class MaterialModule {}
