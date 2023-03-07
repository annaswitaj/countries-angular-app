import { ChangeDetectionStrategy, Component } from '@angular/core';

import { regions } from 'src/app/core/consts/regions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsComponent {
  regions = regions;

  trackByFn(item: any) {
    return item.id;
  }
}
