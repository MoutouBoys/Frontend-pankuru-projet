export interface Passager {

    id?:number,
    nom:string,
    prenom:string,
    numeroDePassPort:string;
    numeroDeVisa:string;
    reservation?:Reservation;
    siege?:Siege;
}
export interface Reservation{
    id?:number;
}
export interface Siege{
    id?:number;
    numero?:string;
}
