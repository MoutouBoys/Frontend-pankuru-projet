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
  private apiUrlVille = "http://localhost:8080/ville/afficher";

  modalIsOpen = false;
  aeroportAModifier!: Aeroport;
  formModification!: FormGroup;

  constructor(private aeroportService : AeroportService,
              private http : HttpClient,
              private fb : FormBuilder){}

  ngOnInit(): void {
    this.aeroportService.getAeroport().subscribe((data) => {
      this.Aeroports = data;
      //console.log(this.Aeroports);
    });

    //Modification Aeroport formulaire
    this.formModification = this.fb.group({
      nom: [''],
      codeIATA: [''],
      longitude: [''],
      latitude: [''],
      altitude: [''],
      capaciteParking: [''],
      nombreDePistes: [''],
      logoCompagnie: [''],
      /*ville: this.fb.group({
        id: ['']
      })*/
    });

    //Afficher la liste des villes dans la liste deroulante
    this.http.get<any[]>(this.apiUrlVille).subscribe((data) => {
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
    this.formModification.patchValue(aeroport);
    this.modalIsOpen = true;
  }
  //fermer modale
  fermerModal() {
    this.modalIsOpen = false;
  }

  enregistrerModifications() {
    const aeroportModifie = this.aeroportAModifier;//venant de la liste des aeroports lorsqu'il est selectionné
    const aeroportData = this.formModification.value;//venant du formulaire
    aeroportModifie.nom = aeroportData.nom;
    aeroportModifie.codeIATA = aeroportData.codeIATA;
    aeroportModifie.longitude = aeroportData.longitude;
    aeroportModifie.latitude = aeroportData.latitude;
    aeroportModifie.altitude = aeroportData.altitude;
    aeroportModifie.capaciteParking = aeroportData.capaciteParking;
    aeroportModifie.nombreDePistes = aeroportData.nombreDePistes;
    // Envoyer une requête PUT à l'API pour mettre à jour l'aéroport
    this.http.put(`http://localhost:8080/aeroport/modifier/${this.aeroportAModifier.id}`, aeroportModifie)
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
