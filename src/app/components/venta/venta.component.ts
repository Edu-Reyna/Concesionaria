import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { LoginService } from '../../services/login.service';
import IvehiculoModel from '../../models/IvehiculoModel';
import IvendedorModel from '../../models/IvendedorModel';
import IusuarioModel from '../../models/IusuarioModel';
import { VentasService } from '../../services/ventas.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta',
  imports: [ReactiveFormsModule],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent {

  @Output() ventaAuto = new EventEmitter<any>();
  data = inject(DIALOG_DATA);
  private dialogRef = inject(DialogRef, { optional: true });

  vehiculo: IvehiculoModel | null = null;
  vendedores: IvendedorModel[] | null = null;
  usuario: IusuarioModel | null = null;

  empleadoForm: FormGroup;
  marca: FormControl;
  modelo: FormControl;
  vendedorSeleccionado: FormControl;
  precio: FormControl;



  constructor(public vehiculoService: VehiculoService, public loginService: LoginService, 
    public ventaService: VentasService) { 
      this.vendedorSeleccionado = new FormControl('');
      this.marca = new FormControl({value: '', disabled: true});
      this.modelo = new FormControl({value: '', disabled: true});
      this.precio = new FormControl({value: '', disabled: true});

    this.empleadoForm = new FormGroup({
      vendedorSeleccionado: this.vendedorSeleccionado,
      marca: this.marca,
      modelo: this.modelo,
      precio: this.precio
    });
  }

  ngOnInit(): void {
    this.getVehiculo();
    this.getUser();
    this.getVendedores();
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

  getUser(){
    this.usuario = this.loginService.getUser();
  }

  closeDialog() {
    this.dialogRef?.close();
  }

  getVendedores() {
    this.ventaService.getVendedores().subscribe({
      next: (data) => {
        console.log(data);
        this.vendedores = data;
      },
      error: (error) => {
        console.error('Error fetching vendedores', error);
      }
    });
  }

  venta() {
    console.log(this.vendedorSeleccionado.value);
    this.ventaService.postVenta(this.vehiculo?._id || '', this.vendedorSeleccionado.value || '', this.usuario?._id || '').subscribe({
      next: (data) => {
        console.log(data);
        this.ventaAuto.emit(data);
        this.closeDialog();
      },
      error: (error) => {
        console.error('Error fetching vendedores', error);
      }
    });
}
}
