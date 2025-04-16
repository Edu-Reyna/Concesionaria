import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IvendedorModel from '../models/IvendedorModel';
import IventaModel from '../models/IventaModel';
import IVentaCompModel from '../models/IventaCompModel';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  URL_VENDEDORES = 'http://localhost:3000/vendedor/';
  URL_VENTAS = 'http://localhost:3000/ventas/compra';
  URL_VENTAS_COMPRADOR = 'http://localhost:3000/ventas/comprador';
  URL_VENTAS_VENDEDOR = 'http://localhost:3000/ventas/vendedor';

  constructor(private http: HttpClient) { }

  getVendedores() {
    return this.http.get<IvendedorModel[]>(this.URL_VENDEDORES);
  }

  postVenta(auto: string, vendedor: string, comprador: string) {
    const body = {
      auto: auto,
      vendedor: vendedor,
      comprador: comprador
    };
    return this.http.post<IventaModel>(this.URL_VENTAS, body);
  }

  getVentasComprador(id: string) {
    return this.http.get<IVentaCompModel[]>(`${this.URL_VENTAS_COMPRADOR}/${id}`);
  }

  getVentasVendedor(id: string) {
    return this.http.get<IVentaCompModel[]>(`${this.URL_VENTAS_VENDEDOR}/${id}`);
  }
}
