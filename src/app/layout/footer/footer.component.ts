import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutMePopupComponent } from './about-me-popup/about-me-popup.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AboutMePopupComponent, {
      width: '30rem',
    });
  }
}
