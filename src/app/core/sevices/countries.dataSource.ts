import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { CountriesTable } from '../models/country.model';
import { CountriesService } from './countries.service';

@Injectable()
export class CountriesDataSource extends DataSource<CountriesTable> {
  countries$ = new BehaviorSubject<CountriesTable[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private CountriesService: CountriesService) {
    super();
  }

  connect(): Observable<CountriesTable[]> {
    return this.countries$.asObservable();
  }

  disconnect(): void {
    this.countries$.complete();
  }

  loadCountries(regionName: string): void {
    this.isLoading$.next(true);
    this.CountriesService.getCountriesByRegion(regionName).subscribe(
      (countries) => {
        const c: CountriesTable[] = [];

        countries.map((country) => {
          c.push({
            flag: country.flags.png,
            name: country.name.common,
            cca2: country.cca2,
          });
        });
        this.countries$.next(c);
        this.isLoading$.next(false);
      }
    );
  }
}
