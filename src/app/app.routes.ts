import { Routes } from '@angular/router';
import { AeroportComponent } from './components/aeroport/aeroport.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AvionComponent } from './components/avion/avion.component';
import { FaqComponent } from './components/faq/faq.component';
import { ParametreComponent } from './components/parametre/parametre.component';
import { PassagerComponent } from './components/passager/passager.component';
import { PersonnelsComponent } from './components/personnels/personnels.component';
import { SiegeComponent } from './components/siege/siege.component';
import { VolComponent } from './components/vol/vol.component';
import { CompagnieComponent } from './components/compagnie/compagnie.component';
import { PageConnexionComponent } from './components/page_inscription_connexion/page-connexion/page-connexion.component';
import { AjoutCompagnieComponent } from './components/mes_formulaire/ajout-compagnie/ajout-compagnie.component';
import { FormulaireAdminComponent } from './components/mes_formulaire/formulaire-admin/formulaire-admin.component';
import { FormulaireVolsComponent } from './components/mes_formulaire/formulaire-vols/formulaire-vols.component';
import { FormulairePassagerComponent } from './components/mes_formulaire/formulaire-passager/formulaire-passager.component';
import { FormulairePersonnelsComponent } from './components/mes_formulaire/formulaire-personnels/formulaire-personnels.component';
import { FormulaireSuperAdminComponent } from './components/mes_formulaire/formulaire-super-admin/formulaire-super-admin.component';
import { FormulairePaysVilleComponent } from './components/mes_formulaire/formulaire-pays-ville/formulaire-pays-ville.component';
import { FormulaireAeroportComponent } from './components/mes_formulaire/formulaire-aeroport/formulaire-aeroport.component';
import { FormulaireReponsesFaqComponent } from './components/mes_formulaire/formulaire-reponses-faq/formulaire-reponses-faq.component';
import { FormulaireSiegeComponent } from './components/mes_formulaire/formulaire-siege/formulaire-siege.component';
import { FormulaireAvionComponent } from './components/mes_formulaire/formulaire-avion/formulaire-avion.component';
import {AuthGuardService} from "./services/auth-guard.service";

export const routes: Routes = [
    {path: "", redirectTo: "/connexion", pathMatch:"full"},
    {path:"accueil",title:"accueil",component:AccueilComponent},
    {path:"avion",title:"avion",component:AvionComponent},
    {path:"aeroport",title:"aeroport",component:AeroportComponent},
    {path:"faq",title:"faq",component:FaqComponent},
    {path:"parametre",title:"parametre",component:ParametreComponent},
    {path:"passager",title:"passager",component:PassagerComponent},
    {path:"personnel",title:"personnels",component:PersonnelsComponent},
    {path:"siege",title:"siege",component:SiegeComponent},
    {path:"vol",title:"vol",component:VolComponent},
    {path:"compagnie",title:"compagnie",component:CompagnieComponent},
    {path:"connexion",title:"connexion",component:PageConnexionComponent},
    {path:"formulaireCompagnie",title:"ajoutCompagnie",component:AjoutCompagnieComponent},
    {path:"formulaireAdmin",title:"formulaireAdmin",component:FormulaireAdminComponent},
    {path:"formulaireVols",title:"formulaireVols",component:FormulaireVolsComponent},
    {path:"formulairePassager",title:"formulairePassager",component:FormulairePassagerComponent},
    {path:"formulairePersonnels",title:"formulairePersonnels",component:FormulairePersonnelsComponent},
    {path:"formulaireDuperAdmin",title:"formulaireDuperAdmin",component:FormulaireSuperAdminComponent},
    {path:"formulairePaysVille",title:"FormulairePaysVille",component:FormulairePaysVilleComponent},
    {path:"formulaireAeroport",title:"formulaireAeroport",component:FormulaireAeroportComponent},
    {path:"formulaireReponsesFaq",title:"formulaireReponsesFaq",component:FormulaireReponsesFaqComponent},
    {path:"formulaireSiege",title:"formulaireSege",component:FormulaireSiegeComponent},
    {path:"formulaireAvion",title:"formulaireAvion",component:FormulaireAvionComponent},
];
