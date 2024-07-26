import { Injectable } from '@angular/core';
import { Avion } from './avion';
import { METHODS } from 'http';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  url="http://localhost:8080/avion"

  constructor() { }
  //recuperation de tous les Avions
  async getAllAvions():Promise<Avion[]>{
    const data=await fetch(`${this.url}/afficher`)
    return await data.json() ?? [];
  }
  //ajout d'un avion
  async addAvion(avion:Avion):Promise<Avion>{
    const data = await fetch(`${this.url}/ajout`,{
      method:'POST',
      headers:{
         'Content-Type': 'application/json'
      },
      body:JSON.stringify(avion)
    });
    return await data.json(); 
  }
  //modifier un Avion
  async updateAvion(avion:Avion):Promise<Avion>{
    const data = await fetch(`${this.url}/${avion.id}`,{
      method:'PUT',
      headers:{
         'Content-Type': 'application/json'
      },
      body:JSON.stringify(avion)

    });
    return await data.json();
  }
  //supprimer un avion
  async deleteAvion(id:number):Promise<void>{
    const data = await fetch(`${this.url}/supprimer/${id}`,{
      method:"DELETE"

    })
  }
  
// recuperer un avion par id
async getAvionById(id:number):Promise<Avion>{
  const data = await fetch(`${this.url}/${id}`)
  console.log(data);
  return await data.json()?? [];
}

}
