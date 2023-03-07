import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

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
  displayedColumns: string[] = ['name'];
  dataSource = new CountriesDataSource(this.CountriesService);

  constructor(
    private CountriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.regionName = this.activatedRoute.snapshot.paramMap.get('regionName');
    if (this.regionName) {
      this.dataSource.loadCountries(this.regionName);
    }
  }

  navigate(cca2: string): void {
    this.router.navigate([cca2]);
  }
}
