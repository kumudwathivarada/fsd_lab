import { Ticket } from "./ticketLogic";
import { Passenger } from "./passenger";

const p1: Passenger = {
    name: "Ramesh",
    age: 30,
    berthPreference: "Upper"
};

const myTicket = new Ticket(p1, 1500, 12711);

myTicket.printTicket();