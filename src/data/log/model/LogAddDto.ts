import type { LogAdd } from "@/domain/log/model/LogAdd";
import { EmptyLogProduct, MapLogProductDtoToDomain, type LogProductDto } from "./LogProductDto";
import type { LogRestockDto } from "./LogRestockDto";

export type LogAddDto = {
    product: LogProductDto;
};

export function MapLogAddDtoToDomain(data: Partial<LogAddDto>): LogAdd {
    return {
        product: data.product
            ? MapLogProductDtoToDomain(data.product)
            : EmptyLogProduct(),
    };
}
