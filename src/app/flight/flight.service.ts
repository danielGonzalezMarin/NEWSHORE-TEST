import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

 
@Injectable()
export class FlightServices {
    private API_URL : any;
    private flights: any;

    constructor(public http:HttpClient) {
        this.API_URL = 'https://recruiting-api.newshore.es/api/flights/1';
        this.flights = this.flights;
    }

    getFlights()  {
        this.flights = this.http.get(this.API_URL);
        return this.flights
    }
}