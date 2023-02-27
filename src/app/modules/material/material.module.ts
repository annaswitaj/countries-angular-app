import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
