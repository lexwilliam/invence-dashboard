import type { OrderGroup } from "../../order/model/OrderGroup";
import type { TransactionFee } from "./TransactionFee";
import type { TransactionPayment } from "./TransactionPayment";

export type Transaction = {
    uuid: string;
    branch_uuid: string;
    order_group: OrderGroup;
    payments: TransactionPayment[];
    customer: string;
    fee: TransactionFee;
    created_by: string;
    created_at: Date;
    deleted_at: Date;
};