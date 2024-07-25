import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  logo1: string = "assets/images/logoToolbar.png";
  logo: string = "assets/images/logo2.png";
  home: string = "assets/images/Home.png";
  vols: string = "assets/images/vol-direct 1.png";
  personnels: string = "assets/images/Personnel.png";
  aeroport: string = "assets/images/aeroport 1.png";
  passagers: string = "assets/images/passagers 1.png";
  avions: string = "assets/images/Avions.png";
  ajouter: string = "assets/images/Ajouter.png";
  parametres: string = "assets/images/Settings.png";
  faq: string = "assets/images/faq 1.png";
  selectedNavItem: string = 'accueil'; // Par défaut, l'accueil est sélectionné

  selectItem(item: string) {
    this.selectedNavItem = item;
  }
}
