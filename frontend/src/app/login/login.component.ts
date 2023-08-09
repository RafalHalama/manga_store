import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthGuardService
  ) {}

  Login() {
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post('http://localhost:8080/api/user/login', bodyData)
      .subscribe((resultData: any) => {
        if (resultData.message == 'Email not exits') {
          alert('Email not exits');
        } else if (resultData.message == 'Login Success') {
          this.authService.login(this.email, this.password);
          this.router.navigateByUrl('/manga');
        } else {
          alert('Incorrect Email and Password not match');
        }
      });
  }
}
