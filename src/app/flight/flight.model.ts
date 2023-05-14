import { Transport } from "../transport/transport.model";

export interface Flight {
    departureStation: string;
    arrivalStation: string;
    price: number;
    transport: Transport;
}