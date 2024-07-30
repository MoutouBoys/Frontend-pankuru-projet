import { Aeroport, AeroportService } from './aeroport.service';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormulaireAeroportComponent} from "../../../mes_formulaire/formulaire-aeroport/formulaire-aeroport.component";


@Component({
  selector: 'app-list-aeroport',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, NgClass, ReactiveFormsModule, FormulaireAeroportComponent],
  templateUrl: './list-aeroport.component.html',
  styleUrl: './list-aeroport.component.css'
})
export class ListAeroportComponent implements OnInit{
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";

  villes : any[] = [];
  Aeroports: Aeroport[] = [];

  modalIsOpen = false;
  aeroportModifier!: FormGroup;
  aeroportAModifier!: Aeroport;

  constructor(private aeroportService : AeroportService,
              private http : HttpClient,
              private fb : FormBuilder){}

  ngOnInit(): void {
    this.aeroportService.getAeroport().subscribe((data) => {
      this.Aeroports = data;
      //console.log(this.Aeroports);
    });

    //Modification Aeroport formulaire
    this.aeroportModifier = this.fb.group({
      nom: [''],
      codeIATA: [''],
      longitude: [''],
      latitude: [''],
      altitude: [''],
      capaciteParking: [''],
      nombreDePistes: [''],
      ville: ['']
    });

    //Afficher la liste des villes dans la liste deroulante
    this.aeroportService.getVille().subscribe((data) => {
      this.villes = data;
      //console.log(this.villes);
    });

  }

  supprimerAeroport(idAeroport: number) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer l'aéroport d'ID ${idAeroport} ?`)) {
      this.http.delete(`http://localhost:8080/aeroport/supprimer/${idAeroport}`)
        .subscribe(
          () => {
            // Suppression réussie, mettre à jour l'interface utilisateur
            const index = this.Aeroports.findIndex(aeroport => aeroport.id === idAeroport);
            this.Aeroports.splice(index, 1);
            console.log('Aéroport supprimé avec succès');
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'aéroport', error);
          }
        );
    }
  }

  ouvrirModalModification(aeroport: Aeroport) {
    this.aeroportAModifier = aeroport;
    this.aeroportModifier.patchValue({
      nom: aeroport.nom,
      codeIATA: aeroport.codeIATA,
      longitude: aeroport.longitude,
      latitude: aeroport.latitude,
      altitude: aeroport.altitude,
      capaciteParking: aeroport.capaciteParking,
      nombreDePistes: aeroport.nombreDePistes,
      ville: aeroport.ville ? aeroport.ville.id : null  // Assurez-vous que la ville est correctement définie
    });
    this.modalIsOpen = true;
  }

  //fermer modale
  fermerModal() {
    this.modalIsOpen = false;
  }

  enregistrerModifications() {
    const aeroportModifier = this.aeroportModifier.value;//nouvelles données venant du formulaire

    const aeroportData: Aeroport = {
      id: this.aeroportAModifier.id,
      nom: aeroportModifier.nom,
      codeIATA: aeroportModifier.codeIATA,
      longitude: aeroportModifier.longitude,
      latitude: aeroportModifier.latitude,
      altitude: aeroportModifier.altitude,
      capaciteParking: aeroportModifier.capaciteParking,
      nombreDePistes: aeroportModifier.nombreDePistes,
      ville: { id: aeroportModifier.ville }
    };

    console.log(aeroportData);
    // Envoyer une requête PUT à l'API pour mettre à jour l'aéroport
    this.http.put(`http://localhost:8080/aeroport/modifier/${this.aeroportAModifier.id}`, aeroportData)
      .subscribe({
        next: (response) => {
          console.log("Aeroport modifié avec succès", response);
        },
        error: (error) => {
          console.error("Erreur lors de la modification de l'aeroport", error);
        },
        complete: () => {
          console.log("Aeroport modifié avec succès, observable terminé");
        }
      });
  }

}
