import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IvehiculoModel from '../models/IvehiculoModel';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  URL_VEHICULOS = 'http://localhost:3000/vehiculos/vehiculos';
  URL_VEHICULOS_ID = 'http://localhost:3000/vehiculos/vehiculos/:id';

  constructor(private http: HttpClient) { }

  getVehiculos() {
    return this.http.get<IvehiculoModel[]>(this.URL_VEHICULOS);
  }

  deleteVehiculo(id: string) {
    return this.http.delete<IvehiculoModel>(`${this.URL_VEHICULOS}/${id}`);
  }
}
