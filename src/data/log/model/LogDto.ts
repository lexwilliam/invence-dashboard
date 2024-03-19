import type { Log } from "@/domain/log/model/Log";
import { MapLogAddDtoToDomain, type LogAddDto } from "./LogAddDto";
import { MapLogDeleteDtoToDomain, type LogDeleteDto } from "./LogDeleteDto";
import { MapLogRestockDtoToDomain, type LogRestockDto } from "./LogRestockDto";
import { MapLogSellDtoToDomain, type LogSellDto } from "./LogSellDto";
import type { LogUpdate } from "@/domain/log/model/LogUpdate";
import { MapLogUpdateDtoToDomain, type LogUpdateDto } from "./LogUpdateDto";

export type LogDto = {
    uuid: string;
    branch_uuid: string;
    restock?: LogRestockDto;
    sell?: LogSellDto;
    add?: LogAddDto;
    delete?: LogDeleteDto;
    update?: LogUpdateDto;
    created_at: Date;
};

export function MapLogDtoToDomain(data: Partial<LogDto>): Log {
    return {
        uuid: data.uuid ?? "",
        branch_uuid: data.branch_uuid ?? "",
        restock: data.restock
            ? MapLogRestockDtoToDomain(data.restock)
            : undefined,
        sell: data.sell ? MapLogSellDtoToDomain(data.sell) : undefined,
        add: data.add ? MapLogAddDtoToDomain(data.add) : undefined,
        delete: data.delete ? MapLogDeleteDtoToDomain(data.delete) : undefined,
        update: data.update ? MapLogUpdateDtoToDomain(data.update) : undefined,
        created_at: data.created_at ?? new Date(),
    };
}
