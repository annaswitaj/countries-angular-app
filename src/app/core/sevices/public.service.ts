import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Regions } from '../consts/regions';

import { BaseService } from './base.service';

const publicApiUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(private baseService: BaseService) {}

  getCountriesByRegion(region: Regions) {
    const req = this.baseService.httpClient
      .get(`${publicApiUrl}region/${region}`)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.baseService.showError(error)
        )
      );

    return req;
  }
}
