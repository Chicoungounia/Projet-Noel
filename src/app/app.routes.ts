import { Routes } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnectionComponent } from './identification/connection/connection.component';





export const routes: Routes = [

    {
        path: "",
        component: ConnectionComponent,
        pathMatch: 'full'

    },
    {
        path: "accueil",
        component: AccueilComponent,
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

