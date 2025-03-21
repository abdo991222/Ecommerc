import { Component } from '@angular/core';
import { NavparComponent } from "../navpar/navpar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank',
  imports: [NavparComponent, FooterComponent,RouterOutlet],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

}
