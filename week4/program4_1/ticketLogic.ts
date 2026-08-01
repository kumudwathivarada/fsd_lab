import { Passenger } from "./passenger";
import { GST_RATE, SERVICE_CHARGE } from "./constants";

export class Ticket {
    private passenger: Passenger;
    private baseFare: number;
    private trainNo: number;

    constructor(passenger: Passenger, baseFare: number, trainNo: number) {
        this.passenger = passenger;
        this.baseFare = baseFare;
        this.trainNo = trainNo;
    }

    // Calculate final fare
    public calculateFare(): number {
        const gstAmount = this.baseFare * GST_RATE;
        return this.baseFare + gstAmount + SERVICE_CHARGE;
    }

    public printTicket(): void {
        console.log("----- Ticket Info -----");
        console.log(`Passenger: ${this.passenger.name}`);
        console.log(`Train No: ${this.trainNo}`);
        console.log(`Final Fare: ${this.calculateFare()}`);
    }
}