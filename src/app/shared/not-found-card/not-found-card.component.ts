import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found-card',
  templateUrl: './not-found-card.component.html',
  styleUrls: ['./not-found-card.component.scss'],
})
export class NotFoundCardComponent {
  @Input() value!: string | null;
}
