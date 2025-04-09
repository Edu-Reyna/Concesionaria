import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="top-bar">
    <img src="assets/logos/Pagani-Logo-Transparent-File.png" alt="Pagani Logo" class="logo" />







      <nav class="navigation">
        <a routerLink="/new-cars" class="nav-link">COCHES NUEVOS</a>
        <a routerLink="/certified-used" class="nav-link">USADOS CERTIFICADOS</a>
        <a routerLink="/assistance" class="nav-link">SERVICIO DE ASISTENCIA</a>
        <a routerLink="/owners" class="nav-link">PROPIETARIOS</a>
    
      </nav>

      <div class="contact">
        <span class="phone">+507 63846078</span>
        <a class="contact-button" routerLink="/contact">CONTACT US</a>
      </div>
    </header>
  `,
  styles: [`
    .top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #1b1b1b;
      padding: 0.5rem 1rem;
      border-bottom: 2px solid #c40000;
      color: white;
      font-family: 'Segoe UI', sans-serif;
    }

    .logo {
      height: 40px;
    }

    .navigation {
      flex: 1;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 0.85rem;
      letter-spacing: 0.8px;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: #c40000;
    }

    .contact {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .phone {
      font-size: 0.9rem;
    }

    .contact-button {
      background: none;
      border: 1px solid white;
      padding: 4px 10px;
      color: white;
      text-decoration: none;
      font-size: 0.85rem;
      transition: all 0.3s ease;
    }

    .contact-button:hover {
      background-color: white;
      color: #1b1b1b;
    }

    @media (max-width: 768px) {
      .navigation {
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .contact {
        flex-direction: column;
        align-items: flex-end;
        gap: 0.3rem;
      }
    }
  `]
})
export class NavBarComponent {}
