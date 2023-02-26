import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

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
          import('./modules/region/region.module').then((m) => m.RegionModule),
      },
      {
        path: '**',
        redirectTo: 'regions',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'regions',
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
