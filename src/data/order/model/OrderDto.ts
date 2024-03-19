import type { Order } from "@/domain/order/model/Order";
import {
    EmptyOrderItem,
    MapOrderItemDtoToDomain,
    type OrderItemDto,
} from "./OrderItemDto";

export type OrderDto = {
    uuid: string;
    created_by: string;
    item: OrderItemDto;
    quantity: number;
    note: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
};

export function MapOrderDtoToDomain(data: Partial<OrderDto>): Order {
    return {
        uuid: data.uuid ?? "",
        created_by: data.created_by ?? "",
        item: data.item ? MapOrderItemDtoToDomain(data.item) : EmptyOrderItem(),
        quantity: data.quantity ?? 0,
        note: data.note ?? "",
        created_at: data.created_at ?? new Date(),
        updated_at: data.updated_at ?? new Date(),
        deleted_at: data.deleted_at ?? new Date(),
    };
}
