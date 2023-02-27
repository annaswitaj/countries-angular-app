import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  CountriesTable,
  CountryGeneral,
} from 'src/app/core/models/country.model';

import { PublicService } from 'src/app/core/sevices/public.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  regionName!: string | null;
  displayedColumns: string[] = ['flag', 'name'];
  dataSource: CountriesTable[] = [];
  countries!: CountryGeneral[] | undefined;
  showNotFoundMessage = false;

  constructor(
    private publicService: PublicService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.regionName = this.activatedRoute.snapshot.paramMap.get('regionName');
    this.getCountriesByRegion();
  }

  private getCountriesByRegion(): void {
    if (this.regionName) {
      this.publicService.getCountriesByRegion(this.regionName).subscribe(
        (countries) => {
          this.countries = countries;
          this.countries.map((country) => {
            this.dataSource.push({
              flag: country.flags.png,
              name: country.name.common,
              cca2: country.cca2,
            });
          });
        },
        (err) => {
          if (err.status == 404) {
            this.showNotFoundMessage = true;
          }
        }
      );
    }
  }
}
