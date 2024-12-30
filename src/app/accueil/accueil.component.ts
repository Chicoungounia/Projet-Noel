import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ConnectionComponent } from "../identification/connection/connection.component";

@Component({
  selector: 'app-intro',
  imports: [HeaderComponent, FooterComponent, ConnectionComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
