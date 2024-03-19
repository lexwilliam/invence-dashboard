import type { LogSell } from "@/domain/log/model/LogSell";
import type { LogProductItemDto } from "./LogProductItemDto";
import type { LogProduct } from "@/domain/log/model/LogProduct";
import { MapLogProductDtoToDomain, type LogProductDto } from "./LogProductDto";

export type LogSellDto = {
    order_uuid: string;
    sold_products: Map<string, LogProductDto>;
    total_profit: number;
};

export function MapLogSellDtoToDomain(data: Partial<LogSellDto>): LogSell {
    return {
        order_uuid: data.order_uuid ?? "",
        sold_products: data.sold_products
            ? Array.from(data.sold_products.values()).map((item) =>
                  MapLogProductDtoToDomain(item),
              )
            : [],
        total_profit: data.total_profit ?? 0,
    };
}
