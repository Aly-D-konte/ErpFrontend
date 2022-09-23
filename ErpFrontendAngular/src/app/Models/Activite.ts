import { Entite } from "./Entite";
import { EtatActivite } from "./EtatActivite";
import { Salle } from "./Salles";
import { TypeActivite } from "./TypeActivite";
import { Utilisateur } from "./Utilisateur";


export class Activite {

  idactivite!: number;
  nom!:string;
   dateDebut!:Date;
  dateFin!: Date;
  duree!:string;
  etat!: boolean;
  sale!: Salle;
  typeActivite!: TypeActivite;
  etatActivite!: EtatActivite;
  entite!: Entite;
  utilisateur!: Utilisateur;
}
