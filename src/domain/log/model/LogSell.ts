import type { LogProduct } from "./LogProduct";
import type { LogProductItem } from "./LogProductItem";

export type LogSell = {
    order_uuid: string;
    sold_products: LogProduct[];
    total_profit: number;
};
