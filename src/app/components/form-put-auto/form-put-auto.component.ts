import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import IvehiculoModel from '../../models/IvehiculoModel';
import { VehiculoService } from '../../services/vehiculo.service';


@Component({
  selector: 'app-form-put-auto',
  imports: [ReactiveFormsModule],
  templateUrl: './form-put-auto.component.html',
  styleUrl: './form-put-auto.component.css'
})
export class FormPutAutoComponent implements OnInit {
  data = inject(DIALOG_DATA);
  private dialogRef = inject(DialogRef, { optional: true });
  vehiculo: IvehiculoModel | null = null;

  @Output() autoModificado = new EventEmitter<void>();
  
  autoForm: FormGroup;
  marca: FormControl;
  modelo: FormControl;
  precio: FormControl;
  anio: FormControl;
  kilometraje: FormControl;
  imagen: FormControl;
  tipo: FormControl;
  transmision: FormControl;
  combustible: FormControl;
  estado: FormControl;
  descripcion: FormControl;

  constructor(public vehiculoService: VehiculoService) {
    this.marca = new FormControl('');
    this.modelo = new FormControl('');
    this.precio = new FormControl('');
    this.anio = new FormControl('');
    this.kilometraje = new FormControl('');
    this.imagen = new FormControl('');
    this.tipo = new FormControl('');
    this.transmision = new FormControl('');
    this.combustible = new FormControl('');
    this.estado = new FormControl('');
    this.descripcion = new FormControl('');

    this.autoForm = new FormGroup({
      marca: this.marca,
      modelo: this.modelo,
      precio: this.precio,
      anio: this.anio,
      kilometraje: this.kilometraje,
      imagen: this.imagen,
      tipo: this.tipo,
      transmision: this.transmision,
      combustible: this.combustible,
      estado: this.estado,
      descripcion: this.descripcion
    });
  }

  ngOnInit(): void {
    this.getVehiculo();
  }

  getVehiculo() {
    this.vehiculoService.getVehiculo(this.data.id).subscribe({
      next: (data) => {
        this.autoForm.patchValue({
          marca: data.marca,
          modelo: data.modelo,
          precio: data.precio,
          anio: data.anio,
          kilometraje: data.kilometraje,
          imagen: data.imagen,
          tipo: data.tipo,
          transmision: data.transmision,
          combustible: data.combustible,
          estado: data.estado,
          descripcion: data.descripcion,
        });
      },
      error: (error) => {
        console.error('Error fetching vehiculo', error);
      }
    });
  }

  closeDialog() {
    this.dialogRef?.close();
  }

  putAuto() {
      const formData = new FormData();
      formData.append('marca', this.autoForm.get('marca')?.value);
      formData.append('modelo', this.autoForm.get('modelo')?.value);
      formData.append('precio', this.autoForm.get('precio')?.value);
      formData.append('anio', this.autoForm.get('anio')?.value);
      formData.append('kilometraje', this.autoForm.get('kilometraje')?.value);
      formData.append('tipo', this.autoForm.get('tipo')?.value);
      formData.append('transmision', this.autoForm.get('transmision')?.value);
      formData.append('combustible', this.autoForm.get('combustible')?.value);
      formData.append('estado', this.autoForm.get('estado')?.value);
      formData.append('descripcion', this.autoForm.get('descripcion')?.value);

    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }
  
      this.vehiculoService.updateVehiculo(this.data.id, formData).subscribe({
        next: (response) => {
          console.log('Vehículo actualizado exitosamente', response);
          this.autoModificado.emit();
          this.closeDialog();
        },
        error: (error) => {
          console.error('Error al actualizar el vehículo', error);
        }
      });
  }

  selectedFile: File | null = null;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
    console.log('Archivo seleccionado:', this.selectedFile);
  }
}

}
