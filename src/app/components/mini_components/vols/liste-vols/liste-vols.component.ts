import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './liste-vols.component.html',
  styleUrl: './liste-vols.component.css'
})
export class ListeVolsComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";
}
