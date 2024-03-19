import { EmptyLogProduct, MapLogProductDtoToDomain } from "@/data/log/model/LogProductDto";
import type { LogProduct } from "./LogProduct";
import type { LogUpdateDto } from "@/data/log/model/LogUpdateDto";


export type LogUpdate = {
    old: LogProduct;
    new: LogProduct;
};