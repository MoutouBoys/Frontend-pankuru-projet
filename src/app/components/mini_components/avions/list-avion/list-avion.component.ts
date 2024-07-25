import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Avion } from '../../../avion/avion';
import { AvionService } from '../../../avion/avion.service';

@Component({
  selector: 'app-list-avion',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink,CommonModule],
  templateUrl: './list-avion.component.html',
  styleUrl: './list-avion.component.css'
})
export class ListAvionComponent {
  personnels: string = "assets/images/Personnel.png";
  modifier: string = "assets/images/modifier.png";
  corbeille: string = "assets/images/corbeille.png";
  ajouter: string = "assets/images/Ajouter.png";
  avionListe:Avion[]=[];
  constructor( private avionService:AvionService){
    this.avionService.getAllAvions().then((avionListe:Avion[])=>{
      this.avionListe=avionListe;
    })

  }
  async deleteAvion(id:number):Promise<void>{
    if(confirm("vous voulez supprimer definitivement"))
    try {
     await this.avionService.deleteAvion(id);
     this.avionListe=this.avionListe.filter(p=>p.id !==id);
      
    } catch (error) {
      console.error("Erreur lors de la suppression :",error)
    }
  }

   // passagerList:Passager[]=[];
  //   constructor(private passagerService:PassagerService){
  //     this.passagerService.getAllpassager().then((passagerList:Passager[])=>{
  //       this.passagerList =passagerList;
  // //     })
  // //   }
  //  async deletePassager(id:number):Promise<void>{
  //    if(confirm("vous etes sur de supprimer definitivemen?"))
  //    try {
      
  //      await this.passagerService.deletePassager(id);
  //      this.passagerList =this.passagerList.filter(p=>p.id !==id);
      
  //    } catch (error) {
  //      console.error("erreur lors de la suppression du passager");
      
  //    }
  // //  }
  

  
}
