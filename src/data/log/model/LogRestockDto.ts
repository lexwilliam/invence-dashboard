export type LogRestockDto = {
    name: string;
    category: string;
    original_stock: number;
    added_stock: number;
    price: number;
};

export function MapLogRestockDtoToDomain(
    data: Partial<LogRestockDto>
): LogRestockDto {
    return {
        name: data.name ?? "",
        category: data.category ?? "",
        original_stock: data.original_stock ?? 0,
        added_stock: data.added_stock ?? 0,
        price: data.price ?? 0,
    };
}