import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AvionService } from '../../avion/avion.service';

@Component({
  selector: 'app-formulaire-avion',
  standalone: true,
  imports: [NgOptimizedImage,FormulaireAvionComponent,ReactiveFormsModule],
  templateUrl: './formulaire-avion.component.html',
  styleUrl: './formulaire-avion.component.css'
})
export class FormulaireAvionComponent {
  constructor( private avionService:AvionService){

  }
  avionForm=new FormGroup({
    nom:new FormControl(''),
    matricule:new FormControl(''),
    capaciteTotal:new FormControl(''),
    status:new FormControl('')

  });
  async submitAvion() {
    console.warn(this.avionForm.value);
    const { nom, matricule, capaciteTotal, status } = this.avionForm.value;
    
    try {
      await this.avionService.addAvion({
        nom: nom ?? '',
        matricule: matricule ?? '',
        capaciteTotale: capaciteTotal ? Number(capaciteTotal):0,  // Convertir capaciteTotal en nombre
        status: status ?? ''
      });
      this.avionForm.reset()
      alert("Avion ajouter avec succès")
    } catch (error) {
      console.error(error);
    }
  }
}
