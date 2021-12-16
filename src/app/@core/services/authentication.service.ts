import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  get isAuthenticated(): boolean {
    const AUTHENTICATED = sessionStorage.getItem('IS_AUTHENTICATION');
    return AUTHENTICATED === 'AUTHENTICATED';
  }
  authenticate(user): Observable<boolean> {
    sessionStorage.setItem('IS_AUTHENTICATION', 'AUTHENTICATED');
    return of(true);
  }

  logout() {
    sessionStorage.clear();
  }
}
