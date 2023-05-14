import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FlightServices } from "../flight/flight.service";

@Component({
    selector: 'app-journey',
    templateUrl: './journey.component.html',
    styleUrls: ['./journey.component.css']
})

export class JourneyComponent implements OnInit{
    public flights: any = [];
    public flighsFinal: any[][] = [];
    public totalPrice: any;
    public priceCop: any;

    origin = new FormControl('');
    destination = new FormControl('');

    constructor(private dataService: FlightServices){
        
    }

    ngOnInit() {
        this.dataService.getFlights().subscribe((response: any) => {
            this.flights = response;
            }, 
        (error: any) => { console.error(error)})
    }    

    // This method evaluates if origin and destination exists in the API and then calculate the journey 
    // for that values also calculate the total price for the journey
    getJourney() {
        let journey1: any[] = [];
        let journey2: any[] = [];

        if(this.origin.value?.toUpperCase() === this.destination.value?.toUpperCase()){
            alert("You can't enter the same value for Origin and Destination")
        } else {
            journey1 = this.flights.filter((el:any) => el.departureStation === this.origin.value?.toUpperCase());
            journey2 = this.flights.filter((el:any) => el.arrivalStation === this.destination.value?.toUpperCase());

            for(let i = 0; i < journey1.length; i++){
                for(let j = 0; j < journey2.length; j++){
                    if(journey1[i].arrivalStation === journey2[j].departureStation){
                        journey1 = journey1[i];
                        journey2 = journey2[j];
                        this.flighsFinal.push(journey1, journey2);
                        break;
                    } else {
                        continue;
                    }
                }
                if(this.flighsFinal.length === 0){
                    alert("Journey doesn't exists");
                    break;
                } 
            }
            // @ts-ignore
            this.totalPrice = this.flighsFinal[0]?.price + this.flighsFinal[1].price; 
        }
    }

    //Calculates the price with Cop value
    getPriceCOP() {
        let value_cop = 4580;
        let currentPrice = parseFloat(this.totalPrice);
        let textPrice = document.getElementById('price');
        // @ts-ignore
        textPrice.innerText = `Total Price : ${value_cop * currentPrice}`;
    }

    //Calculates the price with Australian value
    getPriceAUD() {
        let value_aud = 1.50;
        let currentPrice = parseFloat(this.totalPrice);
        let textPrice = document.getElementById('price');
        // @ts-ignore
        textPrice.innerText = `Total Price: ${value_aud * currentPrice}`;
    }
}
