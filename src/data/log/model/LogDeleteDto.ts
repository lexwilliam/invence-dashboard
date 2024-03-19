import type { LogDelete } from "@/domain/log/model/LogDelete";
import {
    EmptyLogProduct,
    MapLogProductDtoToDomain,
    type LogProductDto,
} from "./LogProductDto";

export type LogDeleteDto = {
    product: LogProductDto;
};

export function MapLogDeleteDtoToDomain(
    data: Partial<LogDeleteDto>,
): LogDelete {
    return {
        product: data.product
            ? MapLogProductDtoToDomain(data.product)
            : EmptyLogProduct(),
    };
}

export function EmptyLogDelete(): LogDelete {
    return {
        product: EmptyLogProduct(),
    };
}