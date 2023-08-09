import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}
  save() {
    let bodyData = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: 'user',
    };
    console.log(bodyData);
    this.http
      .post('http://localhost:8080/api/user/save', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);

        alert('User Registered Successfully');
      });
  }
}
