import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { VentasService } from '../../services/ventas.service';
import IusuarioModel from '../../models/IusuarioModel';
import IvendedorModel from '../../models/IvendedorModel';
import IVentaCompModel from '../../models/IventaCompModel';

@Component({
  selector: 'app-list-venta',
  imports: [],
  templateUrl: './list-venta.component.html',
  styleUrl: './list-venta.component.css'
})
export class ListVentaComponent implements OnInit {
  usuario: IusuarioModel | IvendedorModel | null= null;
  venta: IVentaCompModel[] = [];

  constructor(public loginService: LoginService, public ventaService: VentasService) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUser();

    if(this.usuario?.rol == 1){
    this.getVentasComprador();
    }else if(this.usuario?.rol == 2){
    this.getVentasVendedor();
    }
  }

  getVentasComprador() {
    this.ventaService.getVentasComprador(this.usuario?._id || '').subscribe({
      next: (data) => {
        console.log(data);
        this.venta = data;
      },
      error: (error) => {
        console.error('Error fetching ventas:', error);
      }
    });
  }
  getVentasVendedor() {
    this.ventaService.getVentasVendedor(this.usuario?._id || '').subscribe({
      next: (data: any) => {
        console.log(data);
        this.venta = data;
      },
      error: (error) => {
        console.error('Error fetching ventas:', error);
      }
    });
  }


}
