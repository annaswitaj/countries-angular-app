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
  showNotFoundMessage = false;

  constructor(
    private publicService: PublicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryCode = this.activatedRoute.snapshot.paramMap.get('countryCode');

    this.getCountryDetailsByName();
  }

  trackByFn(index: unknown, item: any) {
    return item.id;
  }

  private getCountryDetailsByName(): void {
    if (this.countryCode) {
      this.publicService.getCountryDetailsByName(this.countryCode).subscribe(
        (countryDetails) => {
          this.countryDetails = countryDetails;

          this.currencies = Object.values(countryDetails.currencies);
        },
        (err) => {
          if (err.status == 404 || err.status == 400) {
            this.showNotFoundMessage = true;
          }
        }
      );
    }
  }
}
