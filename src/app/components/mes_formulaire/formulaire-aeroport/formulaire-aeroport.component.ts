import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { nextTick } from 'process';
import { response } from 'express';
import { error } from 'console';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-formulaire-aeroport',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './formulaire-aeroport.component.html',
  styleUrl: './formulaire-aeroport.component.css'
})
export class FormulaireAeroportComponent implements OnInit{
  private apiUrlVille = "http://localhost:8080/ville/afficher";
  private apiPostAeroport = "http://localhost:8080/aeroport/ajout";
  villes : any[] = [];
  selectedVilleId!: number;

  onVilleChange(event: any) {
    this.selectedVilleId = event.target.value;
    console.log('Selected city ID:', this.selectedVilleId);
    // Use this.selectedVilleId in your component logic
  }

  aeroportForm !: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  //villeId!:bigint;
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
        ville: this.fb.group({
          id: [4]
        })
      });

      //Afficher la liste des villes dans la liste deroulante
      this.http.get<any[]>(this.apiUrlVille).subscribe((data) => {
        this.villes = data;
        //console.log(this.villes);
      });

    }

    onSubmit() {
      const aeroportData = this.aeroportForm.value;

      console.log(aeroportData);


      this.http.post(this.apiPostAeroport, aeroportData)
        .subscribe({
          next: (response) => {
            console.log("Aeroport ajouté avec succès", response);
            this.aeroportForm.reset();
          },
          error: (error) => {
            console.error("Erreur lors de l'ajout du de l'aeroport", error);
          },
          complete: () => {
            console.log("Aeroport ajouté avec succès, observable terminé");
          }
        });
    }

  }
