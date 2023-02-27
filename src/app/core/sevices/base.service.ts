import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(@Inject(HttpClient) public httpClient: HttpClient) {}

  showError(error: HttpErrorResponse): Observable<never> {
    if (!environment.production) {
      console.log(error);
    }

    return throwError(() => error);
  }
}
