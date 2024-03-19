import type { Transaction } from "@/domain/transaction/model/Transaction";
import { EmptyOrderGroup, MapOrderGroupDtoToDomain, type OrderGroupDto } from "../../order/model/OrderGroupDto";
import { EmptyTransactionFee, MapTransactionFeeToDomain, type TransactionFeeDto } from "./TransactionFeeDto";
import type { TransactionPaymentDto } from "./TransactionPaymentDto";

export type TransactionDto = {
    uuid: string;
    branch_uuid: string;
    order_group: OrderGroupDto;
    payments: Map<string, TransactionPaymentDto>;
    customer: string
    fee: TransactionFeeDto
    created_by: string
    created_at: Date
    deleted_at: Date
};

export function MapTransactionToDomain(
    data: Partial<TransactionDto>
): Transaction {
    return {
        uuid: data.uuid ?? "",
        branch_uuid: data.branch_uuid ?? "",
        order_group: data.order_group ? MapOrderGroupDtoToDomain(data.order_group) : EmptyOrderGroup(),
        payments: Object.values(data.payments ? data.payments : []),
        customer: data.customer ?? "",
        fee: data.fee
            ? MapTransactionFeeToDomain(data.fee)
            : EmptyTransactionFee(),
        created_by: data.created_by ?? "",
        created_at: data.created_at ?? new Date(),
        deleted_at: data.deleted_at ?? new Date(),
    };
}