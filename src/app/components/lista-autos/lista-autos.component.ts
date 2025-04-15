import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import IvehiculoModel from '../../models/IvehiculoModel';
import { LoginService } from '../../services/login.service';
import IvendedorModel from '../../models/IvendedorModel';
import IusuarioModel from '../../models/IusuarioModel';

@Component({
  selector: 'app-lista-autos',
  imports: [],
  templateUrl: './lista-autos.component.html',
  styleUrl: './lista-autos.component.css'
})
export class ListaAutosComponent implements OnInit {
  vehiculos: IvehiculoModel[] = [];
  usuario: IvendedorModel | IusuarioModel | null = null;

  constructor(public vehiculoService: VehiculoService, public loginService: LoginService) { }

  ngOnInit(): void {
    this.getVehiculos();
    this.usuario = this.loginService.getUser();
  }


  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        console.log(this.vehiculos)
      },
      error: (error) => {
        console.error('Error fetching vehiculos', error);
      }
    });
  }

  eliminar(id: string) {
    this.vehiculoService.deleteVehiculo(id).subscribe({
      next: () => {
        this.getVehiculos();
      },
      error: (error) => {
        console.error('Error deleting vehiculo', error);
      }
    });
  }

  modificar(id: string) {
  }

  comprar(id: string) {

  }

  verDetalles(id: string) {

  }

}
