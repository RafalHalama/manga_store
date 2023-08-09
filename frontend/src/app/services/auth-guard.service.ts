import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private authenticated = false;
  private userRoles: string[] = [];
  private _email: string | null = null;
  private emailSubject = new BehaviorSubject<string>('');

  constructor() {
    const storedAuthData = localStorage.getItem('authData');
    if (storedAuthData) {
      const authData = JSON.parse(storedAuthData);
      this.authenticated = authData.authenticated;
      this.userRoles = authData.userRoles;
      this.emailSubject.next(authData._email);
    }
  }

  get email(): Observable<string> {
    return this.emailSubject.asObservable();
  }

  login(email: string, password: string) {
    this.authenticated = true;
    this.userRoles = ['ROLE_USER'];
    this.emailSubject.next(email);
    this.storeAuthData();
  }

  logout(): void {
    this.authenticated = false;
    this.userRoles = [];
    this.emailSubject.next('');

    localStorage.removeItem('authData');
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  hasRequiredRoles(requiredRoles: string[]): boolean {
    return this.userRoles.some((role) => requiredRoles.includes(role));
  }

  private storeAuthData() {
    const authData = {
      authenticated: this.authenticated,
      userRoles: this.userRoles,
      _email: this._email,
    };
    localStorage.setItem('authData', JSON.stringify(authData));
  }
}
