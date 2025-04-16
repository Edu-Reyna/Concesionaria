import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import IusuarioModel from '../../models/IusuarioModel';
import IvendedorModel from '../../models/IvendedorModel';
import { Dialog } from '@angular/cdk/dialog';
import { FormAutoComponent } from '../form-auto/form-auto.component';
import { EventService } from '../../services/event.service';
import { FormVendedorComponent } from '../form-vendedor/form-vendedor.component';

@Component({
  selector: 'app-nav-bar',
  imports: [FormAutoComponent, FormVendedorComponent, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  usuario: IusuarioModel | IvendedorModel | null = null;

  constructor(private router: Router, public loginService: LoginService, private eventService: EventService) { }

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

    
  private dialog = inject(Dialog)
  saveCars() {
    const dialogRef = this.dialog.open(FormAutoComponent);
    
    if (dialogRef.componentInstance) {
      dialogRef.componentInstance.autoCreado.subscribe(() => {
        this.eventService.emitirAutoCreado();
      });
    }
    
  }

  saveVendedor(){
    this.dialog.open(FormVendedorComponent);
  }

}
