import type { Transaction } from "../model/Transaction";


export interface TransactionRepository {
    get(branch_uuid: string): Promise<Transaction[]>
}