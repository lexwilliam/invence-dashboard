import type { Order } from "./Order"

export type OrderGroup = {
    uuid: string;
    branch_uuid: string;
    created_by: string;
    orders: Order[];
    created_at: Date;
    deleted_at: Date;
    completed_at: Date;
};