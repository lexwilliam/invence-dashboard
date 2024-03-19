import type { LogProduct } from "@/domain/log/model/LogProduct";
import type { LogProductItemDto } from "./LogProductItemDto";

export type LogProductDto = {
    uuid: string;
    name: string;
    description: string;
    category_name: string;
    sell_price: number;
    items: Map<string, LogProductItemDto>;
    image_path: string;
    created_at: Date;
    updated_at: Date;
};

export function MapLogProductDtoToDomain(
    data: Partial<LogProductDto>,
): LogProduct {
    return {
        uuid: data.uuid ?? "",
        name: data.name ?? "",
        description: data.description ?? "",
        category_name: data.category_name ?? "",
        sell_price: data.sell_price ?? "",
        items: Array.from(data.items ? data.items.values() : []),
        image_path: data.image_path ?? "",
        created_at: data.created_at ?? new Date(),
        updated_at: data.updated_at ?? new Date(),
    };
}

export function EmptyLogProduct(): LogProduct {
    return {
        uuid: "",
        name: "",
        description: "",
        category_name: "",
        sell_price: 0,
        items: [],
        image_path: "",
        created_at: new Date(),
        updated_at: new Date(),
    };
}
