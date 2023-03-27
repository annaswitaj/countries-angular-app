import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { CountriesRowTable } from '../models/country.model';
import { CountriesService } from './countries.service';

@Injectable()
export class CountriesDataSource extends DataSource<CountriesRowTable> {
  countries$ = new BehaviorSubject<CountriesRowTable[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private CountriesService: CountriesService) {
    super();
  }

  connect(): Observable<CountriesRowTable[]> {
    return this.countries$.asObservable();
  }

  disconnect(): void {
    this.countries$.complete();
  }

  loadCountries(regionName: string): void {
    this.isLoading$.next(true);
    this.CountriesService.getCountriesByRegion(regionName).subscribe(
      (countries) => {
        const CountriesRowTable: CountriesRowTable[] = [];

        countries.map((country) => {
          CountriesRowTable.push({
            flag: country.flags.png,
            name: country.name.common,
            cca2: country.cca2,
          });
        });
        this.countries$.next(CountriesRowTable);
        this.isLoading$.next(false);
      }
    );
  }
}
