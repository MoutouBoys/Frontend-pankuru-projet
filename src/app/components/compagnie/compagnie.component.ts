import { Component } from '@angular/core';
import { SalaireComponent } from '../mini_components/compagnies/salaire/salaire.component';
import { TitleCompagnieComponent } from '../mini_components/compagnies/title-compagnie/title-compagnie.component';
import { GenreCompagnieComponent } from '../mini_components/compagnies/genre-compagnie/genre-compagnie.component';
import { ConteneurRightComponent } from '../mini_components/compagnies/conteneur-right/conteneur-right.component';

@Component({
  selector: 'app-compagnie',
  standalone: true,
  imports: [SalaireComponent, TitleCompagnieComponent, GenreCompagnieComponent, ConteneurRightComponent],
  templateUrl: './compagnie.component.html',
  styleUrl: './compagnie.component.css'
})
export class CompagnieComponent {
  ajouter: string= "assets/images/ajouter.png";
}
