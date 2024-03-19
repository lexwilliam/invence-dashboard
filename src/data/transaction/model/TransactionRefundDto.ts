import type { TransactionRefund } from "@/domain/transaction/model/TransactionRefund"

export type TransactionRefundDto = {
    uuid: string
    total: number
    refunded_by: string
    reason: string
    created_at: Date
    deleted_at?: Date
}

export function MapTransactionRefundDtoToDomain(
    data: Partial<TransactionRefundDto>,
): TransactionRefund {
    return {
        uuid: data.uuid ?? "",
        total: data.total ?? 0,
        refunded_by: data.refunded_by ?? "",
        reason: data.reason ?? "",
        created_at: data.created_at ?? new Date(),
        deleted_at: data.deleted_at ?? new Date(),
    };
}