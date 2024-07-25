import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-personnels',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './list-personnels.component.html',
  styleUrl: './list-personnels.component.css'
})
export class ListPersonnelsComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";
}
