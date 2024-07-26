import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListeVolsService } from './liste-vols.service';

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './liste-vols.component.html',
  styleUrl: './liste-vols.component.css'
})
export class ListeVolsComponent implements OnInit{
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";
  vols: any;

  constructor(private listeVol: ListeVolsService){}
  ngOnInit(): void {
      this.listeVol.getVols().subscribe(data =>{
        this.vols = data;
      })
  }
}
