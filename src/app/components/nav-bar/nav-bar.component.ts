import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import IusuarioModel from '../../models/IusuarioModel';
import IvendedorModel from '../../models/IvendedorModel';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  usuario: IusuarioModel | IvendedorModel | null = null;

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit() {
    this.GetUser();
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  GetUser(){
    this.usuario = this.loginService.getUser();
  }

  logout() {
    this.loginService.logout();
    this.usuario = null; 
    this.router.navigate(['/login']);
  }

}
