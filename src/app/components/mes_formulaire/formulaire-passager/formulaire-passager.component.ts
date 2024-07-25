import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { PassagerService } from '../../passager/passager.service';

@Component({
  selector: 'app-formulaire-passager',
  standalone: true,
  imports: [NgOptimizedImage,ReactiveFormsModule],
  templateUrl: './formulaire-passager.component.html',
  styleUrl: './formulaire-passager.component.css'
})
export class FormulairePassagerComponent {
  constructor(private passagerService:PassagerService){}
  passagerForm= new FormGroup({
    nom:new FormControl(''),
    prenom:new FormControl(''),
    numeroDePassPort:new FormControl(''),
    numeroDeVisa:new FormControl('')
  });
   async submbitPassager(){
    console.warn(this.passagerForm.value);
    const {nom,prenom,numeroDePassPort,numeroDeVisa}=this.passagerForm.value;
    try {
     await this.passagerService.addPassager({
        nom:nom ?? '',
        prenom:prenom ?? '',
        numeroDePassPort:numeroDePassPort ?? '',
        numeroDeVisa:numeroDeVisa ?? ''
      });
      alert("Passager ajouté avec succès")
      this.passagerForm.reset();
    } catch (error) {
      console.error("Erreur lors de l'ajout du passager:",error)
      
    }
  }
}
