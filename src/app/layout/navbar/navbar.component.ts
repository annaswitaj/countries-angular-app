import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  regionName!: string | null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.regionName = this.activatedRoute.snapshot.paramMap.get('regionName');
    //console.log(this.regionName);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {}

  navigateHome(): void {
    this.router.navigate(['/']);
  }
}
