import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IusuarioModel from '../models/IusuarioModel';
import IvendedorModel from '../models/IvendedorModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_LOGIN = 'http://localhost:3000/login/sesion';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post<IusuarioModel | IvendedorModel>(this.URL_LOGIN, body);
  }

  saveUser(user: IusuarioModel | IvendedorModel) {
    localStorage.setItem('user', JSON.stringify(user));
  }


  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
