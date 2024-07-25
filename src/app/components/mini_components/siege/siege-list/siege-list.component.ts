import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-siege-list',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './siege-list.component.html',
  styleUrl: './siege-list.component.css'
})
export class SiegeListComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  logo: string = "assets/images/logoToolbar.png";
  ajouter: string = "assets/images/Ajouter.png";
}
