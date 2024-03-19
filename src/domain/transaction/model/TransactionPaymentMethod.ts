import type { TransactionPaymentMethodFee } from "./TransactionPaymentMethodFee"

export type TransactionPaymentMethod = {
    uuid: string
    group: string
    name: string
    fee: TransactionPaymentMethodFee
}