import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AvionService } from '../../../avion/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../../../avion/avion';

@Component({
  selector: 'app-formulaire-update-avion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-update-avion.component.html',
  styleUrls: ['./formulaire-update-avion.component.css']
})
export class FormulaireUpdateAvionComponent implements OnInit {
  avionListe: Avion[] = [];
  id!: number;

  constructor(
    private avionService: AvionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  updateAvionForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    matricule: new FormControl(''),
    capaciteTotal: new FormControl(''),
    status: new FormControl('')
  });

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadAvion();
  }

  async loadAvion() {
    if (this.id !== null && this.id !== undefined) {  // Assurez-vous que `id` n'est ni `null` ni `undefined`
      try {
        const avion = await this.avionService.getAvionById(this.id);
        
        // Assurez-vous que `avion` n'est pas `undefined`
        if (avion) {
          this.updateAvionForm.patchValue({
            id: avion.id !== undefined ? avion.id.toString() : '',  // Convertir en string ou utiliser une valeur par défaut
            nom: avion.nom ?? '',  // Utiliser le nullish coalescing operator pour fournir une valeur par défaut
            matricule: avion.matricule ?? '',  // Fournir une valeur par défaut si `matricule` est `null` ou `undefined`
            capaciteTotal: avion.capaciteTotale !== undefined ? avion.capaciteTotale.toString() : '',  // Convertir en string
            status: avion.status ?? ''  // Fournir une valeur par défaut si `status` est `null` ou `undefined`
          });
        } else {
          console.error('L\'avion récupéré est indéfini');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'avion :', error);
      }
    } else {
      console.error('ID est nul ou indéfini');
    }
  }
  

  async UpdateSubmitAvion(): Promise<void> {
    console.warn(this.updateAvionForm.value);
  
    // Extraction des valeurs du formulaire
    const formValues = this.updateAvionForm.value;
  
    // Assurez-vous que `capaciteTotal` est un nombre
    const capaciteTotal = formValues.capaciteTotal ? +formValues.capaciteTotal : 0;
  
    // Créez un objet Avion avec les propriétés correctement mappées
    const updateAvion: Avion = {
      id: this.id,
      nom: formValues.nom || '',  // Valeur par défaut si null ou undefined
      matricule: formValues.matricule || '',  // Valeur par défaut si null ou undefined
      capaciteTotale: capaciteTotal, 
      status: formValues.status || ''  // Valeur par défaut si null ou undefined
    };
  
    try {
      await this.avionService.updateAvion(updateAvion);
      this.updateAvionForm.reset();
      alert("Avion modifié avec succès");
      this.router.navigate(['/avion']); 
    } catch (error) {
      console.log("Erreur lors de la modification", error);
    }
  }
}
