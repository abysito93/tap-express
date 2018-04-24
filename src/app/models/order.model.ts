import { Timestamp } from "rxjs/operators/timestamp";

export class Order {
    order_id: number;
    order_date: Date;
    status: string;
    total: number;
    quantity: number;
}
