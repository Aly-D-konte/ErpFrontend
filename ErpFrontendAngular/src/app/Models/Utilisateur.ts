import { Entite } from "./Entite";
import { Role } from "./Role";

export class Utilisateur {

              id!: number;
              nom!: string;
              prenom!: string;
              numero!: string;
              email!: string;
              password!: string
              role!: Role;
             entite!: Entite;
}
