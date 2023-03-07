import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CountriesDataSource } from 'src/app/core/sevices/countries.dataSource';

import { CountriesService } from 'src/app/core/sevices/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent implements OnInit {
  regionName!: string | null;
  displayedColumns: string[] = ['flag', 'name'];
  dataSource = new CountriesDataSource(this.CountriesService);

  constructor(
    private CountriesService: CountriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.regionName = this.activatedRoute.snapshot.paramMap.get('regionName');
    if (this.regionName) {
      this.dataSource.loadCountries(this.regionName);
    }
  }
}
