import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  async login() {
    try {
      const data = {
        username: this.username,
        password: this.password,
      };
      const response = await this.apiService.loginAdmin(data);
      if (response.token) {
        localStorage.setItem('adminToken', response.token);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      alert('Login failed');
    }
  }

  goToForgotPassword() {
    this.router.navigate(['/forget-password']);
  }

  ngOnInit() {
  }

}
