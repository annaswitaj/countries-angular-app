import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries.component';

export const regionRoutes: Routes = [
  {
    path: '',
    component: CountriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(regionRoutes)],
  exports: [RouterModule],
})
export class RegionRoutingModule {}
