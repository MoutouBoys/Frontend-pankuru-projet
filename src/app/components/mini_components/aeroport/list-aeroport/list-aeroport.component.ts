import { Aeroport, AeroportService } from './aeroport.service';
import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-aeroport',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './list-aeroport.component.html',
  styleUrl: './list-aeroport.component.css'
})
export class ListAeroportComponent implements OnInit{
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";

  Aeroports: Aeroport[] = [];

  constructor(private aeroportService : AeroportService){}

  ngOnInit(): void {
    this.aeroportService.getAeroport().subscribe((data) => {
      this.Aeroports = data;
      console.log(this.Aeroports);
    });
  }


}
