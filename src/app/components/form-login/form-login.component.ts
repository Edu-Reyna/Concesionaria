import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  loginForm:FormGroup;
  email:  FormControl;
  password: FormControl;

  constructor(public loginService: LoginService, private router: Router) {
    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (response) => {
        this.loginService.saveUser(response);
        console.log('Login successful', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    })
  }

}
