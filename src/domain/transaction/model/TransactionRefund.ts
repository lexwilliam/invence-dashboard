export type TransactionRefund = {
    uuid: string
    total: number
    refunded_by: string
    reason: string
    created_at: Date
    deleted_at?: Date
}