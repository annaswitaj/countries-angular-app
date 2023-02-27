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
export class PublicService {
  private _countries = new Map<string, CountryGeneral[]>();
  private _countryDetails = new Map<string, any[]>();

  constructor(private baseService: BaseService) {}

  getCountriesByRegion(region: string): Observable<CountryGeneral[]> {
    if (this._countries && this._countries.get(region)) {
      return of(this._countries.get(region)) as Observable<CountryGeneral[]>;
    } else {
      const req = this.baseService.httpClient
        .get<CountryGeneral[]>(
          `${publicApiUrl}region/${region}?fields=name,flags,currencies,capital,population`
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

  getCountryDetailsByName(countryName: string): Observable<CountryDetails[]> {
    console.log(this._countryDetails);
    if (this._countryDetails && this._countryDetails.get(countryName)) {
      return of(this._countryDetails.get(countryName)) as Observable<
        CountryDetails[]
      >;
    } else {
      const req = this.baseService.httpClient
        .get<CountryDetails[]>(
          `${publicApiUrl}name/${countryName}?fullText=true,fields=name,flags,currencies,capital,population`
        )
        .pipe(
          tap((countryDetails: CountryDetails[]) => {
            console.log(countryDetails);
            this._countryDetails.set(countryName, countryDetails);
          }),
          catchError((error: HttpErrorResponse) =>
            this.baseService.showError(error)
          )
        );

      return req;
    }
  }
}
