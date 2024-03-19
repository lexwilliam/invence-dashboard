import type { LogUpdate } from "@/domain/log/model/LogUpdate";
import { EmptyLogProduct, MapLogProductDtoToDomain, type LogProductDto } from "./LogProductDto";

export type LogUpdateDto = {
    old: LogProductDto;
    new: LogProductDto;
};

export function MapLogUpdateDtoToDomain(
    data: Partial<LogUpdateDto>,
): LogUpdate {
    return {
        old: data.old ? MapLogProductDtoToDomain(data.old) : EmptyLogProduct(),
        new: data.new ? MapLogProductDtoToDomain(data.new) : EmptyLogProduct(),
    };
}

export function EmptyLogUpdate(): LogUpdate {
    return {
        old: EmptyLogProduct(),
        new: EmptyLogProduct(),
    };
}
