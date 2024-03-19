import type { LogProductItem } from "./LogProductItem";

export type LogProduct = {
    uuid: string;
    name: string;
    description: string;
    category_name: string;
    sell_price: number;
    items: LogProductItem[];
    image_path: string;
    created_at: Date;
    updated_at: Date;
};
