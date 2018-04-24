import { Timestamp } from "rxjs/operators/timestamp";

export class Order {
    order_id: number;
    order_date: Date;
    total: number;
    quantity: number;
}
