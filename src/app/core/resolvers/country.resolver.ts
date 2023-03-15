import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { regions } from '../consts/regions';

@Injectable({
  providedIn: 'root',
})
export class CountryResolver implements Resolve<Observable<typeof regions>> {
  resolve(): Observable<typeof regions> {
    return of(regions);
  }
}
