import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './components/region.component';

export const regionRoutes: Routes = [
  {
    path: '',
    component: RegionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(regionRoutes)],
  exports: [RouterModule],
})
export class RegionRoutingModule {}
