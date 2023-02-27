import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails } from 'src/app/core/models/country.model';
import { PublicService } from 'src/app/core/sevices/public.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countryDetails!: any[];
  countryName!: string | null;
  constructor(
    private publicService: PublicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryName = this.activatedRoute.snapshot.paramMap.get('countryName');
    console.log(this.countryName);

    this.getCountryDetailsByName();
  }

  private getCountryDetailsByName(): void {
    if (this.countryName) {
      this.publicService
        .getCountryDetailsByName(this.countryName)
        .subscribe((countryDetails) => {
          this.countryDetails = countryDetails;
          console.log(this.countryDetails);
        });
    }
  }
}
