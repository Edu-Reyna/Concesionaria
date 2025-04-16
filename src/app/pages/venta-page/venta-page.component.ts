import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ListVentaComponent } from '../../components/list-venta/list-venta.component';

@Component({
  selector: 'app-venta-page',
  imports: [NavBarComponent, ListVentaComponent],
  templateUrl: './venta-page.component.html',
  styleUrl: './venta-page.component.css'
})
export class VentaPageComponent {

}
