import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails, Currency } from 'src/app/core/models/country.model';
import { CountriesService } from 'src/app/core/sevices/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {
  countryDetails!: CountryDetails;
  countryCode!: string | null;
  currencies!: Currency[];

  constructor(
    private CountriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('countryCode');

    this.getCountryDetailsByCountryCode();
  }

  trackByFn(item: any) {
    return item.id;
  }

  private getCountryDetailsByCountryCode(): void {
    if (this.countryCode) {
      this.CountriesService.getCountryDetailsByCountryCode(
        this.countryCode
      ).subscribe((countryDetails) => {
        this.countryDetails = countryDetails;

        this.currencies = Object.values(countryDetails.currencies);
      });
    }
  }
}
