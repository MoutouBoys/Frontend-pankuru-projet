
export interface Avion {
    id?:number;
    matricule:string;
    capaciteTotale:number;
    nom:string;
    status:string;
    compagnie?:Compagnie;
  
}
export interface Compagnie{
    id?:number;
    nom?:string;
}