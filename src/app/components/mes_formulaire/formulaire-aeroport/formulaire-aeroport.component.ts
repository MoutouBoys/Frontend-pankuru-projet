import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { nextTick } from 'process';
import { response } from 'express';
import { error } from 'console';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {Aeroport, AeroportService} from "../../mini_components/aeroport/list-aeroport/aeroport.service";



@Component({
  selector: 'app-formulaire-aeroport',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './formulaire-aeroport.component.html',
  styleUrl: './formulaire-aeroport.component.css'
})
export class FormulaireAeroportComponent implements OnInit{

  villes: any[] = [];
  aeroportForm!: FormGroup;

  constructor(private fb: FormBuilder, private aeroportService: AeroportService) {}
    ngOnInit() {
      this.aeroportForm = this.fb.group({
        nom: [''],
        codeIATA: [''],
        longitude: [''],
        latitude: [''],
        altitude: [''],
        capaciteParking: [''],
        nombreDePistes: [''],
        logoCompagnie: [''],
        ville: ['']
      });

      //Afficher la liste des villes dans la liste deroulante
      this.aeroportService.getVille().subscribe((data) => {
        this.villes = data;
      });

    }


  onSubmit() {
    const formValues = this.aeroportForm.value;

    const aeroportData: Aeroport = {
      id: 0,
      nom: formValues.nom,
      codeIATA: formValues.codeIATA,
      longitude: formValues.longitude,
      latitude: formValues.latitude,
      altitude: formValues.altitude,
      capaciteParking: formValues.capaciteParking,
      nombreDePistes: formValues.nombreDePistes,
      ville: { id: formValues.ville }
    };

      this.aeroportService.postAeroport(aeroportData).subscribe({
        next: (response) => {
          console.log("Aeroport ajouté avec succès", response);
          this.aeroportForm.reset();
        },
        error: (error) => {
          console.error("Erreur lors de l'ajout de l'aeroport", error);
        },
        complete: () => {
          console.log("Aeroport ajouté avec succès, observable terminé");
        }
      });

  }
}
