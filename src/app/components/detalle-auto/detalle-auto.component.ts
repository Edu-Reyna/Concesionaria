import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import IvehiculoModel from '../../models/IvehiculoModel';

@Component({
  selector: 'app-detalle-auto',
  imports: [],
  templateUrl: './detalle-auto.component.html',
  styleUrl: './detalle-auto.component.css'
})
export class DetalleAutoComponent implements OnInit{
  data = inject(DIALOG_DATA);
  private dialogRef = inject(DialogRef, { optional: true });
  vehiculo: IvehiculoModel | null = null;


  constructor(public vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.getVehiculo();
  }

  closeDialog() {
    this.dialogRef?.close();
  }

  getVehiculo() {
    this.vehiculoService.getVehiculo(this.data.id).subscribe({
      next: (data) => {
        console.log(data);
        this.vehiculo = data;

      },
      error: (error) => {
        console.error('Error fetching vehiculo', error);
      }
    });
  }

}
