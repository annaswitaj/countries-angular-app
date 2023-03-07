import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { CountryDetails } from '../models/country.model';
import { CountriesService } from '../sevices/countries.service';

@Injectable({
  providedIn: 'root',
})
export class CountryResolver implements Resolve<CountryDetails> {
  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CountryDetails> {
    return this.countriesService
      .getCountryDetailsByCountryCode(route.params?.['countryCode'])
      .pipe(
        catchError(() => {
          this.router.navigate([route.params?.['countryCode']]);
          return EMPTY;
        })
      ) as Observable<CountryDetails>;
  }
}
