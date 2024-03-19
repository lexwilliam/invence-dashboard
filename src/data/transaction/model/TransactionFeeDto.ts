export type TransactionFeeDto = {
    name: string;
    nominal: number;
    percent: number;
};

export function MapTransactionFeeToDomain(
    data: Partial<TransactionFeeDto>,
): TransactionFeeDto {
    return {
        name: data.name ?? "",
        nominal: data.nominal ?? 0,
        percent: data.percent ?? 0,
    };
}

export function EmptyTransactionFee(): TransactionFeeDto {
    return {
        name: "",
        nominal: 0,
        percent: 0,
    };
}
