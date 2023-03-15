import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CountryDetails, Currency } from 'src/app/core/models/country.model';
import { CountriesService } from 'src/app/core/sevices/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {
  countryDetails$!: Observable<CountryDetails>;
  countryCode!: string | null;
  currencies$!: Observable<Currency[]>;

  constructor(
    private CountriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('countryCode');

    if (this.countryCode) {
      this.setCountryDetailsByCode(this.countryCode);
    }
  }

  trackByFn(item: any) {
    return item.id;
  }

  private setCountryDetailsByCode(countryCode: string): void {
    this.countryDetails$ =
      this.CountriesService.getCountryDetailsByCountryCode(countryCode);

    if (this.countryDetails$) {
      this.setCurrenciesByCountryDetails(this.countryDetails$);
    }
  }

  private setCurrenciesByCountryDetails(
    countryDetails$: Observable<CountryDetails>
  ): void {
    this.currencies$ = countryDetails$.pipe(
      map((countryDetails) => Object.values(countryDetails.currencies))
    );
  }
}
