import type { OrderItem } from "./OrderItem";


export type Order = {
    uuid: string
    created_by: string
    item: OrderItem
    quantity: number
    note: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
};
