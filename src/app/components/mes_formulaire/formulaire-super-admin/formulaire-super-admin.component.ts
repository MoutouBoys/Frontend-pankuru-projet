import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RechercheComponent } from '../../recherche/recherche.component';

@Component({
  selector: 'app-formulaire-super-admin',
  standalone: true,
  imports: [NavBarComponent, RechercheComponent],
  templateUrl: './formulaire-super-admin.component.html',
  styleUrl: './formulaire-super-admin.component.css'
})
export class FormulaireSuperAdminComponent {
}
