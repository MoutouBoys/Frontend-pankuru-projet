import { Component, OnInit } from '@angular/core';
import { TitltePassagersComponent } from '../mini_components/passagers/titlte-passagers/titlte-passagers.component';
import { PassagersConteneurComponent } from '../mini_components/passagers/passagers-conteneur/passagers-conteneur.component';
import { ListPassagersComponent } from '../mini_components/passagers/list-passagers/list-passagers.component';
import { NgOptimizedImage } from '@angular/common';
import { Passager } from './passager';
import { PassagerService} from './passager.service';

@Component({
  selector: 'app-passager',
  standalone: true,
  imports: [NgOptimizedImage,TitltePassagersComponent, PassagersConteneurComponent, ListPassagersComponent],
  templateUrl: './passager.component.html',
  styleUrl: './passager.component.css'
})
export class PassagerComponent {
  logo: string = "assets/images/logoToolbar.png";

}
