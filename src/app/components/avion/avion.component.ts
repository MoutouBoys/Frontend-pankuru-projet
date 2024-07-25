import { Component } from '@angular/core';
import { TitleAvionComponent } from '../mini_components/avions/title-avion/title-avion.component';
import { PassagersConteneurComponent } from '../mini_components/avions/passagers-conteneur/passagers-conteneur.component';
import { ListAvionComponent } from '../mini_components/avions/list-avion/list-avion.component';
import { AppareilConteneurComponent } from '../mini_components/avions/appareil-conteneur/appareil-conteneur.component';

@Component({
  selector: 'app-avion',
  standalone: true,
  imports: [TitleAvionComponent, PassagersConteneurComponent, ListAvionComponent, AppareilConteneurComponent],
  templateUrl: './avion.component.html',
  styleUrl: './avion.component.css'
})
export class AvionComponent {

}
