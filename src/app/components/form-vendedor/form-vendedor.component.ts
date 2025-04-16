import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrarseService } from '../../services/registrarse.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-form-vendedor',
  imports: [ReactiveFormsModule],
  templateUrl: './form-vendedor.component.html',
  styleUrl: './form-vendedor.component.css'
})
export class FormVendedorComponent {

  private dialogRef = inject(DialogRef, { optional: true });
  
  registrerForm: FormGroup;
  nombre: FormControl;
  apellido: FormControl;
  email: FormControl;
  password: FormControl;
  rol: FormControl;

  constructor(public registrarseService: RegistrarseService) {
    this.nombre = new FormControl('');
    this.apellido = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.rol = new FormControl(2);

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
    this.registrarseService.registerAdmin(this.nombre.value, this.apellido.value, this.email.value, this.password.value, this.rol.value).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        alert('Registro exitoso');
        this.closeDialog();
      },
      error: (error) => {
        console.error('Error al registrar', error);
        alert('Error al registrar');
      }
    });
  }

  closeDialog() {
    this.dialogRef?.close();
  }
}
