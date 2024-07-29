import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassagerService } from '../../../passager/passager.service';
import { Passager } from '../../../passager/passager';

@Component({
  selector: 'app-formulaire-update-passager',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-update-passager.component.html',
  styleUrl: './formulaire-update-passager.component.css'
})
export class FormulaireUpdatePassagerComponent implements OnInit {
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private passagerService:PassagerService
  ){}
  passagerList:Passager[]=[];
  id!:number;
 passagerForm=new FormGroup({
  id:new FormControl(''),
  nom:new FormControl(''),
  prenom:new FormControl(''),
  numeroDePassport:new FormControl(''),
  numeroDeVisa:new FormControl('')

 });
 ngOnInit(): void {
  this.id=+this.route.snapshot.paramMap.get('id')!;
  this.loadPassager()
     
 }
   async loadPassager() {
    if(this.id !==null && this.id !==undefined){
      try {
        const passager = await this.passagerService.getPassagerById(this.id)
        //
        if(passager){
          this.passagerForm.patchValue({
            id:passager.id !== undefined ?passager.id.toString():'',
            nom:passager.nom??'',
            prenom:passager.prenom??'',
            numeroDePassport:passager.numeroDePassPort??'',
            numeroDeVisa:passager.numeroDeVisa??''

          })
        }else{console.log("L'avion recuperer est undefini")}
      } catch (error) {
        console.error("Erreur lors de la recuperation",error)
      }
    }else{console.error("id undefini ou null")} 
  }
  async updatePassagerFom():Promise<void>{
    const formValues= this.passagerForm.value;
    //
    const updatePassager:Passager={
      id:this.id,
      nom:formValues.nom|| '',
      prenom:formValues.prenom||'',
      numeroDePassPort:formValues.numeroDePassport||'',
      numeroDeVisa:formValues.numeroDeVisa||'',
    } 
    try {
       await this.passagerService.updtatePassager(updatePassager);
       this.passagerForm.reset();
       alert("Passager modifier Avec succès");
       this.router.navigate(['/passager']);
    } catch (error) {
       console.error("Erreur lors de la modification",error)
    }
  };
     
   
}


// async UpdateSubmitAvion(): Promise<void> {
// console.warn(this.updateAvionForm.value);

// // Extraction des valeurs du formulaire
// const formValues = this.updateAvionForm.value;

// // Assurez-vous que `capaciteTotal` est un nombre
// const capaciteTotal = formValues.capaciteTotal ? +formValues.capaciteTotal : 0;

// // Créez un objet Avion avec les propriétés correctement mappées
// const updateAvion: Avion = {
//   id: this.id,
//   nom: formValues.nom || '',  // Valeur par défaut si null ou undefined
//   matricule: formValues.matricule || '',  // Valeur par défaut si null ou undefined
//   capaciteTotale: capaciteTotal, 
//   status: formValues.status || ''  // Valeur par défaut si null ou undefined
// };

// try {
//   await this.avionService.updateAvion(updateAvion);
//   this.updateAvionForm.reset();
//   alert("Avion modifié avec succès");
//   this.router.navigate(['/avion']); 
// } catch (error) {
//   console.log("Erreur lors de la modification", error);
// }
// }
// }
