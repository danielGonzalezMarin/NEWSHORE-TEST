import { Flight } from "../flight/flight.model";

export interface Journey {
    flighs: Flight[];
    origin: string;
    destination: string;
    price: number;
}