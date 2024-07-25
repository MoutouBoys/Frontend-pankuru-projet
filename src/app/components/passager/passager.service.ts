import { Injectable } from '@angular/core';
import { Passager } from './passager';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor() { }
  url="http://localhost:8080/passager";
  
  //recuperation des passager 
  async getAllpassager():Promise<Passager[]>{
    const data =await fetch(`${this.url}/liste`);
    return await data.json() ?? [];
  }
  //ajout d'un passager
  async addPassager(passager:Passager): Promise<Passager>{
    const data = await fetch(`${this.url}/ajout`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(passager)
    });
    return await data.json();
  }
  //modification d'un passager
  async updtatePassager(passager:Passager):Promise<Passager>{
    const data = await fetch(`${this.url}/modifier/${passager.id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(passager)
    });
    return await data.json();
  }
  //supprimer un passager
  async deletePassager(id:number):Promise<void>{
    const data = await fetch(`${this.url}/supprimer/${id}`,{
      method:'DELETE',
  });
  }
   async submitApp(nom:string,prenom:string,numeroDePassPort:string,numeroDeVisa:string){
    console.log(nom,prenom,numeroDePassPort,numeroDeVisa);
    const passager:Passager ={nom,prenom,numeroDePassPort,numeroDeVisa}
    return await this.addPassager(passager)

  }
  async getPassagerById(id:number):Promise<Passager>{
    const data = await fetch(`${this.url}/liste/${id}`);
    
    return await data.json() ?? [];
  }
}
