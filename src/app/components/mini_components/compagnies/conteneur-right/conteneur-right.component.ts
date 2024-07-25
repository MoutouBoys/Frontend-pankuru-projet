import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conteneur-right',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './conteneur-right.component.html',
  styleUrl: './conteneur-right.component.css'
})
export class ConteneurRightComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";
}
