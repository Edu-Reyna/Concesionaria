import { Component, inject, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { VehiculoService } from '../../services/vehiculo.service';
import IvehiculoModel from '../../models/IvehiculoModel';
import { LoginService } from '../../services/login.service';
import IvendedorModel from '../../models/IvendedorModel';
import IusuarioModel from '../../models/IusuarioModel';
import { DetalleAutoComponent } from '../detalle-auto/detalle-auto.component';
import { EventService } from '../../services/event.service';
import { FormPutAutoComponent } from '../form-put-auto/form-put-auto.component';
import { VentaComponent } from '../venta/venta.component';

@Component({
  selector: 'app-lista-autos',
  imports: [DetalleAutoComponent, FormPutAutoComponent, VentaComponent],
  templateUrl: './lista-autos.component.html',
  styleUrl: './lista-autos.component.css'
})
export class ListaAutosComponent implements OnInit {
  vehiculos: IvehiculoModel[] = [];
  usuario: IvendedorModel | IusuarioModel | null = null;

  private dialog = inject(Dialog);

  constructor(public vehiculoService: VehiculoService, public loginService: LoginService, 
    private eventService: EventService) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUser();

    if(this.usuario?.rol == 1 || this.usuario?.rol == null){
      this.getVehiculos();
      }else if(this.usuario?.rol == 2){
        this.getVehiculoAdmin();
      }

    this.eventService.autoCreado$.subscribe(() => {
      this.getVehiculoAdmin(); 
    });
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

  getVehiculoAdmin() {
    this.vehiculoService.getVehiculosAdmin().subscribe({
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
        this.getVehiculoAdmin();
      },
      error: (error) => {
        console.error('Error deleting vehiculo', error);
      }
    });
  }

  modificar(id: string) {
    const dialogRef = this.dialog.open(FormPutAutoComponent, {
      data: { id: id },
    });

    if (dialogRef.componentInstance) {
      dialogRef.componentInstance.autoModificado.subscribe(() => {
        this.getVehiculoAdmin();
      });
    }
  }

  comprar(id: string) {
    const dialogRef = this.dialog.open(VentaComponent, {
      data: { id: id },
    });

    if (dialogRef.componentInstance) {
      dialogRef.componentInstance.ventaAuto.subscribe(() => {
        this.getVehiculos();
      });
    }
  }

  verDetalles(id: string) {
    this.dialog.open(DetalleAutoComponent, {
      data: { id: id },
    });
  }

}
