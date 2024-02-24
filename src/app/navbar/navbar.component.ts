import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showMenu = true; // Always show the menu
  isSmallScreen = window.innerWidth <= 992;
  activeSection: string | null = null;

  menuItems = [
    { label: 'INICIO', link: '#home' },
    { label: 'SOBRE NOSOTROS', link: '#about' },
    { label: 'VISITAS', link: '#gallery' }, // Updated link for FOTOS
    { label: 'ACTIVIDADES', link: '#activities' },
    { label: 'SERVICIOS', link: '#services' },
    { label: 'CONTACTO', link: '#contact' },
    { label: 'GALERÍA', link: '/fotos' },
    { label: 'HAZ TU RESERVA', link: '/fotos' },
    { label: 'PRECIOS', link: '/fotos' }, // Updated link for GALERÍA
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 992;
  }

  constructor(private router: Router) {
    // Trigger the initial check for screen size
    this.onResize({ target: { innerWidth: window.innerWidth } });
  }

  // Method to navigate to a section when a menu item is clicked
  navigateToSection(section: string) {
    // Use Angular Router to navigate to the section
    this.router.navigate([section]);

    // Close the menu if it's open
    this.showMenu = false;
  }
}
