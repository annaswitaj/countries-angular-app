import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CountryDetails, CountryGeneral } from '../models/country.model';

import { BaseService } from './base.service';

const publicApiUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _countries = new Map<string, CountryGeneral[]>();
  private _countryDetails = new Map<string, CountryDetails>();

  constructor(private baseService: BaseService) {}

  getCountriesByRegion(region: string): Observable<CountryGeneral[]> {
    if (this._countries && this._countries.get(region)) {
      return of(this._countries.get(region)) as Observable<CountryGeneral[]>;
    } else {
      const req = this.baseService.httpClient
        .get<CountryGeneral[]>(
          `${publicApiUrl}region/${region}?fields=name,flags,cca2`
        )
        .pipe(
          tap((countries: CountryGeneral[]) => {
            this._countries.set(region, countries);
          }),
          catchError((error: HttpErrorResponse) =>
            this.baseService.showError(error)
          )
        );

      return req;
    }
  }

  getCountryDetailsByCountryCode(
    countryCode: string
  ): Observable<CountryDetails> {
    if (this._countryDetails && this._countryDetails.get(countryCode)) {
      return of(
        this._countryDetails.get(countryCode)
      ) as Observable<CountryDetails>;
    } else {
      const req = this.baseService.httpClient
        .get<CountryDetails>(
          `${publicApiUrl}alpha/${countryCode}?fields=name,flags,currencies,capital,population,cca2`
        )
        .pipe(
          tap((countryDetails: CountryDetails) => {
            this._countryDetails.set(countryCode, countryDetails);
          }),
          catchError((error: HttpErrorResponse) =>
            this.baseService.showError(error)
          )
        );

      return req;
    }
  }
}
