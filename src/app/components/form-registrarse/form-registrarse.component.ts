import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrarseService } from '../../services/registrarse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registrarse',
  imports: [ReactiveFormsModule],
  templateUrl: './form-registrarse.component.html',
  styleUrl: './form-registrarse.component.css'
})
export class FormRegistrarseComponent {
  registrerForm: FormGroup;
  nombre: FormControl;
  apellido: FormControl;
  email: FormControl;
  password: FormControl;
  rol: FormControl;

  constructor(public registrarseService: RegistrarseService, private router: Router) {
    this.nombre = new FormControl('');
    this.apellido = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.rol = new FormControl(1);

    this.registrerForm = new FormGroup({
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password,
      rol: this.rol
    });
  }

  registrar() {
    console.log(this.registrerForm.value);
    this.registrarseService.register(this.nombre.value, this.apellido.value, this.email.value, this.password.value, this.rol.value).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        alert('Registro exitoso');
        this.router.navigate(['/login']);

      },
      error: (error) => {
        console.error('Error al registrar', error);
        alert('Error al registrar');
      }
    });
  }

}
