import { Component, OnInit } from '@angular/core';
import { FlightServices } from './flight/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlightServices]
})
export class AppComponent {
  title = 'my-app';
}
