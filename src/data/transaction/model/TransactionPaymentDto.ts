import type { TransactionPayment } from "@/domain/transaction/model/TransactionPayment";
import {
    EmptyTransactionPaymentMethod,
    MapTransactionPaymentMethodDtoToDomain,
    type TransactionPaymentMethodDto,
} from "./TransactionPaymentMethodDto";

export type TransactionPaymentDto = {
    uuid: string;
    total: number;
    fee: number;
    payment_method: TransactionPaymentMethodDto;
    created_at: Date;
    deleted_at?: Date;
};

export function MapTransactionPaymentDtoToDomain(
    data: Partial<TransactionPaymentDto>,
): TransactionPayment {
    return {
        uuid: data.uuid ?? "",
        total: data.total ?? 0,
        fee: data.fee ?? 0,
        payment_method: data.payment_method
            ? MapTransactionPaymentMethodDtoToDomain(data.payment_method)
            : EmptyTransactionPaymentMethod(),
        created_at: data.created_at ?? new Date(),
        deleted_at: data.deleted_at ?? new Date(),
    };
}

export function EmptyTransactionPayment(): TransactionPayment {
    return {
        uuid: "",
        total: 0,
        fee: 0,
        payment_method: EmptyTransactionPaymentMethod(),
        created_at: new Date(),
        deleted_at: new Date(),
    };
}
