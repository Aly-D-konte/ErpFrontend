import { ListePostulant } from "./ListePostulant";

export class Postulant {

   id!:number;
    nom!:string;
   prenom!:string;
   numer!:string;
   email!:string;
    genre!:string;
   etat!: boolean;

  listePostulant!: ListePostulant;
}
