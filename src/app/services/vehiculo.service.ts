import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IvehiculoModel from '../models/IvehiculoModel';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  URL_VEHICULOS = 'http://localhost:3000/vehiculos/vehiculos';
  URL_VEHICULO_CREATE = 'http://localhost:3000/vehiculos/register';
  URL_VEHICULO_ADMIN = 'http://localhost:3000/vehiculos/vehiculosAdmin';

  constructor(private http: HttpClient) { }

  getVehiculos() {
    return this.http.get<IvehiculoModel[]>(this.URL_VEHICULOS);
  }

  getVehiculosAdmin() {
    return this.http.get<IvehiculoModel[]>(this.URL_VEHICULO_ADMIN);
  }

  deleteVehiculo(id: string) {
    return this.http.delete<IvehiculoModel>(`${this.URL_VEHICULOS}/${id}`);
  }

  getVehiculo(id: string) {
    return this.http.get<IvehiculoModel>(`${this.URL_VEHICULOS}/${id}`);
  }

  createVehiculo(formData: FormData) {
    return this.http.post<IvehiculoModel>(this.URL_VEHICULO_CREATE, formData);
  }

  updateVehiculo(id: string, vehiculo: FormData) {
    return this.http.put<IvehiculoModel>(`${this.URL_VEHICULOS}/${id}`, vehiculo);
  }
}
