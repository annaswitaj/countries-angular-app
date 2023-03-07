import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesResolver } from './core/resolvers/countries.resolver';
import { CountryResolver } from './core/resolvers/country.resolver';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'regions',
    pathMatch: 'full',
  },

  {
    path: '',
    component: ContentLayoutComponent,

    children: [
      {
        path: 'regions',
        loadChildren: () =>
          import('./modules/regions/regions.module').then(
            (m) => m.RegionsModule
          ),
      },
      {
        path: 'regions/:regionName',
        loadChildren: () =>
          import('./modules/countries/countries.module').then(
            (m) => m.RegionModule
          ),
        resolve: {
          countries: CountriesResolver,
        },
      },
      {
        path: 'regions/:regionName/:countryCode',
        loadChildren: () =>
          import('./modules/country/country.module').then(
            (m) => m.CountryModule
          ),
        resolve: {
          country: CountryResolver,
        },
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
