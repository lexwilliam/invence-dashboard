import type { TransactionPaymentMethod } from "@/domain/transaction/model/TransactionPaymentMethod"
import { MapTransactionPaymentMethodFeeDtoToDomain, type TransactionPaymentMethodFeeDto } from "./TransactionPaymentMethodFeeDto"

export type TransactionPaymentMethodDto = {
    uuid: string
    group: string
    name: string
    fee: TransactionPaymentMethodFeeDto
}

export function MapTransactionPaymentMethodDtoToDomain(
    data: Partial<TransactionPaymentMethodDto>
): TransactionPaymentMethodDto {
    return {
        uuid: data.uuid ?? "",
        group: data.group ?? "",
        name: data.name ?? "",
        fee: data.fee
            ? MapTransactionPaymentMethodFeeDtoToDomain(data.fee)
            : { fixed: 0, percent: 0 },
    }
}

export function EmptyTransactionPaymentMethod(): TransactionPaymentMethod {
    return {
        uuid: "",
        group: "",
        name: "",
        fee: { fixed: 0, percent: 0 },
    }
}