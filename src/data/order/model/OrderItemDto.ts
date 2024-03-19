export type OrderItemDto = {
    uuid: string
    name: string
    category_name: string
    category_uuid: string
    label: string
    price: number
    image_path: string
    description: string
}

export function MapOrderItemDtoToDomain(
    data: Partial<OrderItemDto>
): OrderItemDto {
    return {
        uuid: data.uuid ?? "",
        name: data.name ?? "",
        category_name: data.category_name ?? "",
        category_uuid: data.category_uuid ?? "",
        label: data.label ?? "",
        price: data.price ?? 0,
        image_path: data.image_path ?? "",
        description: data.description ?? "",
    };
}

export function EmptyOrderItem(): OrderItemDto {
    return {
        uuid: "",
        name: "",
        category_name: "",
        category_uuid: "",
        label: "",
        price: 0,
        image_path: "",
        description: "",
    };
}