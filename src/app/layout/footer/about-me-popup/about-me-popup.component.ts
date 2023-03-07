import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about-me-popup',
  templateUrl: './about-me-popup.component.html',
  styleUrls: ['./about-me-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMePopupComponent {
  constructor(public dialogRef: MatDialogRef<AboutMePopupComponent>) {}
}
