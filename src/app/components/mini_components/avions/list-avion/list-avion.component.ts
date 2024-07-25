import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-avion',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './list-avion.component.html',
  styleUrl: './list-avion.component.css'
})
export class ListAvionComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";
}
