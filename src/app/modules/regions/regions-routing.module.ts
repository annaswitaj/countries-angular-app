import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { RegionsComponent } from './components/regions.component';

export const regionsRoutes: Routes = [
  {
    path: '',
    component: RegionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(regionsRoutes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule {}
