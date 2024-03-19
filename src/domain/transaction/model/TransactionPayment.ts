import type { TransactionPaymentMethod } from "./TransactionPaymentMethod";


export type TransactionPayment = {
    uuid: string;
    total: number;
    fee: number;
    payment_method: TransactionPaymentMethod;
    created_at: Date;
    deleted_at?: Date;
};
