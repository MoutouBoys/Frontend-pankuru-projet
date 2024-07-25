import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormulairePassagerComponent } from '../../../mes_formulaire/formulaire-passager/formulaire-passager.component';
import { RouterLink } from '@angular/router';
import { Passager } from '../../../passager/passager';
import { PassagerService } from '../../../passager/passager.service';

@Component({
  selector: 'app-list-passagers',
  standalone: true,
  imports: [NgOptimizedImage,FormulairePassagerComponent, RouterLink,CommonModule],
  templateUrl: './list-passagers.component.html',
  styleUrl: './list-passagers.component.css'
})
export class ListPassagersComponent  implements OnInit{
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  logo: string = "assets/images/logoToolbar.png";
  ajouter: string = "assets/images/Ajouter.png";
  ngOnInit(): void {
      
  }
  passagerList:Passager[]=[];
  constructor(private passagerService:PassagerService){
    this.passagerService.getAllpassager().then((passagerList:Passager[])=>{
      this.passagerList =passagerList;
    })
  }
 async deletePassager(id:number):Promise<void>{
  if(confirm("vous etes sur de supprimer definitivemen?"))
  try {
    
    await this.passagerService.deletePassager(id);
    this.passagerList =this.passagerList.filter(p=>p.id !==id);
    
  } catch (error) {
    console.error("erreur lors de la suppression du passager");
    
  }
}

}
