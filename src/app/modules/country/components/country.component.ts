import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails, Currency } from 'src/app/core/models/country.model';
import { PublicService } from 'src/app/core/sevices/public.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countryDetails!: CountryDetails;
  countryCode!: string | null;
  currencies!: Currency[];

  constructor(
    private publicService: PublicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('countryCode');
    console.log(this.countryCode);

    this.getCountryDetailsByName();
  }

  private getCountryDetailsByName(): void {
    if (this.countryCode) {
      this.publicService
        .getCountryDetailsByName(this.countryCode)
        .subscribe((countryDetails) => {
          this.countryDetails = countryDetails;
          console.log(this.countryDetails, countryDetails);

          this.currencies = Object.values(countryDetails.currencies);
          console.log(this.currencies);
          console.log(this.countryDetails);
        });
    }
  }

  trackByFn(index: unknown, item: any) {
    return item.id;
  }
}
