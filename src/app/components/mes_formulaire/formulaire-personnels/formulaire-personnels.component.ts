import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-personnels',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent],
  templateUrl: './formulaire-personnels.component.html',
  styleUrl: './formulaire-personnels.component.css'
})
export class FormulairePersonnelsComponent {
}
