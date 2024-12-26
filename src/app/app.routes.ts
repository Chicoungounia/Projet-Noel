import { Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';





export const routes: Routes = [

    {
        path: "",
        component: IntroComponent,
        pathMatch: 'full'

    },
    {
        path: "utilisateurs",
        component: UtilisateursComponent,
        pathMatch: 'full'

    },
    {
        path: "produits",
        component: ProduitsComponent,
        pathMatch: 'full'

    },
    {
        path: "commandes",
        component: CommandesComponent,
        pathMatch: 'full'

    },
    {
        path: "clients",
        component: ClientsComponent,
        pathMatch: 'full'

    },


  
 
];

