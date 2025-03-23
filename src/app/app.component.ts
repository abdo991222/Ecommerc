import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteServiceService } from './core/services/flowbite/flowbite-service.service';
import { NavparComponent } from "./layouts/navpar/navpar.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavparComponent, FooterComponent , NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private flowbiteService: FlowbiteServiceService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
    });
  }
}
