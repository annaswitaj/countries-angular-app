import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { CountriesService } from '../sevices/countries.service';
import { CountryGeneral } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesResolver implements Resolve<CountryGeneral[]> {
  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CountryGeneral[]> {
    return this.countriesService
      .getCountriesByRegion(route.params?.['regionName'])
      .pipe(
        catchError(() => {
          this.router.navigate([route.params?.['regionName']]);
          return EMPTY;
        })
      ) as Observable<CountryGeneral[]>;
  }
}
