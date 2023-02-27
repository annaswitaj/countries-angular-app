import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatIconModule, MatTableModule, MatButtonModule],
  exports: [MatIconModule, MatTableModule, MatButtonModule],
})
export class MaterialModule {}
