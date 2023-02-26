import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from 'src/app/core/sevices/public.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  regionName!: string | null;
  constructor(
    private publicService: PublicService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.regionName =
      this._Activatedroute.snapshot?.paramMap?.get('regionName');

    this.getCountriesByRegion();
  }

  private getCountriesByRegion(): void {
    this.publicService.getCountriesByRegion('Africa').subscribe((regions) => {
      console.log(regions);
    });
  }
}
