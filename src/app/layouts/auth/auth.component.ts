import { Component } from '@angular/core';
import { NavparComponent } from "../navpar/navpar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-auth',
  imports: [NavparComponent, RouterOutlet, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
