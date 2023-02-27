import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country.component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(countryRoutes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
