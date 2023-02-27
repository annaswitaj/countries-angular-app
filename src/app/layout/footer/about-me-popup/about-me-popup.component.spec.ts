import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePopupComponent } from './about-me-popup.component';

describe('AboutMePopupComponent', () => {
  let component: AboutMePopupComponent;
  let fixture: ComponentFixture<AboutMePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMePopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
