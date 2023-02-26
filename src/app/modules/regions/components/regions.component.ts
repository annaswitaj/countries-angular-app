import { Component } from '@angular/core';

import { regions } from 'src/app/core/consts/regions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent {
  regions = regions;
}
