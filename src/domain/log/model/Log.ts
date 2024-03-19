import type { LogAdd } from "./LogAdd";
import type { LogDelete } from "./LogDelete";
import type { LogRestock } from "./LogRestock";
import type { LogSell } from "./LogSell";
import type { LogUpdate } from "./LogUpdate";


export type Log = {
    uuid: string;
    branch_uuid: string;
    restock?: LogRestock;
    sell?: LogSell;
    add?: LogAdd;
    delete?: LogDelete;
    update?: LogUpdate;
    created_at: Date
};
