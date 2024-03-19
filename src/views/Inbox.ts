import type { Log } from "@/domain/log/model/Log"
import type { Transaction } from "@/domain/transaction/model/Transaction"

export type Inbox = {
    transaction?: Transaction
    log?: Log
    created_at: Date
}