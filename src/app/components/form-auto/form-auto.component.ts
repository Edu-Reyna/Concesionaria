import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-form-auto',
  imports: [ReactiveFormsModule],
  templateUrl: './form-auto.component.html',
  styleUrl: './form-auto.component.css'
})
export class FormAutoComponent {
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

  @Output() autoCreado = new EventEmitter<void>();

  private dialogRef = inject(DialogRef, { optional: true })

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
    this.estado = new FormControl('Disponible');
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

  closeDialog() {
    this.dialogRef?.close();
  }

  createCar() {
    const formData = new FormData();
    formData.append('marca', this.marca.value);
    formData.append('modelo', this.modelo.value);
    formData.append('precio', this.precio.value);
    formData.append('anio', this.anio.value);
    formData.append('kilometraje', this.kilometraje.value);
    formData.append('imagen', this.imagen.value);
    formData.append('tipo', this.tipo.value);
    formData.append('transmision', this.transmision.value);
    formData.append('combustible', this.combustible.value);
    formData.append('estado', this.estado.value);
    formData.append('descripcion', this.descripcion.value);

    this.vehiculoService.createVehiculo(formData).subscribe({
      next: (response) => {
        console.log('Vehiculo creado exitosamente', response);
        this.autoCreado.emit(); 
        this.closeDialog();
        
      },
      error: (error) => {
        console.error('Error al crear el vehiculo', error);
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagen.setValue(input.files[0]);
    }
  }
}
