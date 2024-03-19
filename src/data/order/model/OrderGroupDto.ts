import type { OrderGroup } from "@/domain/order/model/OrderGroup";
import type { OrderDto } from "./OrderDto";

export type OrderGroupDto = {
    uuid: string;
    branch_uuid: string;
    created_by: string;
    orders: Map<string, OrderDto>;
    created_at: Date;
    deleted_at: Date;
    completed_at: Date;
};

export function MapOrderGroupDtoToDomain(
    data: Partial<OrderGroupDto>,
): OrderGroup {
    return {
        uuid: data.uuid ?? "",
        branch_uuid: data.branch_uuid ?? "",
        created_by: data.created_by ?? "",
        orders: data.orders ? Object.values(data.orders) : [],
        created_at: data.created_at ?? new Date(),
        deleted_at: data.deleted_at ?? new Date(),
        completed_at: data.completed_at ?? new Date(),
    };
}

export function EmptyOrderGroup(): OrderGroup {
    return {
        uuid: "",
        branch_uuid: "",
        created_by: "",
        orders: [],
        created_at: new Date(),
        deleted_at: new Date(),
        completed_at: new Date(),
    };
}
