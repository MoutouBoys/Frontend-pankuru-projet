import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormulairePassagerComponent } from '../../../mes_formulaire/formulaire-passager/formulaire-passager.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-passagers',
  standalone: true,
  imports: [NgOptimizedImage,FormulairePassagerComponent, RouterLink],
  templateUrl: './list-passagers.component.html',
  styleUrl: './list-passagers.component.css'
})
export class ListPassagersComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  logo: string = "assets/images/logoToolbar.png";
  ajouter: string = "assets/images/Ajouter.png";
}
