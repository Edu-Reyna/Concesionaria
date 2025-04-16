import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IusuarioModel from '../models/IusuarioModel';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  URL_REGISTRARSE = 'http://localhost:3000/usuarios/register';
  URL_REGISTRARSE_ADMIN = 'http://localhost:3000/vendedor/register';

  constructor(private http: HttpClient) { }

  register(nombre: string, apellido: string, email: string, password: string, rol: Number) {
    const body = { nombre, apellido, email, password, rol };
    return this.http.post<IusuarioModel>(this.URL_REGISTRARSE, body);
  }

  registerAdmin(nombre: string, apellido: string, email: string, password: string, rol: Number) {
    const body = { nombre, apellido, email, password, rol };
    return this.http.post<IusuarioModel>(this.URL_REGISTRARSE_ADMIN, body);
  }
  
}
