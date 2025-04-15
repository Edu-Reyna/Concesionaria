import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ListaAutosComponent } from '../../components/lista-autos/lista-autos.component';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ListaAutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
