import type { LogProductItem } from "@/domain/log/model/LogProductItem";

export type LogProductItemDto = {
    itemId: number;
    quantity: number;
    buy_price: number;
    cretaed_at: Date;
    updated_at: Date;
};

export function MapLogProductItemDtoToDomain(
    data: Partial<LogProductItemDto>,
): LogProductItem {
    return {
        itemId: data.itemId ?? "",
        quantity: data.quantity ?? 0,
        buy_price: data.buy_price ?? 0,
        cretaed_at: data.cretaed_at ?? new Date(),
        updated_at: data.updated_at ?? new Date(),
    };
}
