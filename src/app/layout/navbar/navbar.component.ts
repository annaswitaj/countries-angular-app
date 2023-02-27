import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  regionName!: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.regionName = this.activatedRoute.snapshot.paramMap.get('regionName');
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }
}
