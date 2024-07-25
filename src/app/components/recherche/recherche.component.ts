import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.css'
})
export class RechercheComponent {
  passagers: string = "assets/images/Profil.png";
}
