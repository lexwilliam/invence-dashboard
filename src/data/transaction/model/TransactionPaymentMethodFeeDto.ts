import type { TransactionPaymentMethodFee } from "@/domain/transaction/model/TransactionPaymentMethodFee";

export type TransactionPaymentMethodFeeDto = {
    fixed: number
    percent: number
}

export function MapTransactionPaymentMethodFeeDtoToDomain(
    data: Partial<TransactionPaymentMethodFeeDto>,
): TransactionPaymentMethodFee {
    return {
        fixed: data.fixed ?? 0,
        percent: data.percent ?? 0,
    };
}