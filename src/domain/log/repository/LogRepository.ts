import type { Log } from "../model/Log";

export interface LogRepository {
    get(branch_uuid: string): Promise<Log[]>
}