<template>
    <div class="flex flex-col gap-4 bg-neutral-20 w-screen h-screen">
        <div class="flex flex-row p-4">
            <span class="text-xl font-bold">Hello {{ user?.name }} !</span>
        </div>
        <div class="flex flex-row justify-between gap-4">
            <div class="flex flex-col gap-4 ps-4 w-full">
                <div class="flex flex-row gap-4 w-full">
                    <div class="flex flex-col w-1/3 bg-white rounded-lg p-4">
                        <span>Total Transaction</span>
                        <span
                            >Rp{{ transactionTotal.toLocaleString("id") }}</span
                        >
                    </div>
                    <div class="flex flex-col w-1/3 bg-white rounded-lg p-4">
                        <span>Total Profit</span>
                        <span>Rp{{ profitTotal.toLocaleString("id") }}</span>
                    </div>
                    <div class="flex flex-col w-1/3 bg-white rounded-lg p-4">
                        <span>Total Expense</span>
                        <span>Rp{{ expenseTotal.toLocaleString("id") }}</span>
                    </div>
                </div>
                <div class="flex flex-row gap-4 w-full">
                    <div
                        class="flex flex-col w-3/5 h-80 bg-white rounded-lg p-4"
                    >
                        <span class="text-xl font-semibold">Sales Review</span>
                        <div class="flex h-full items-center">
                            <Line
                                :data="salesChartData"
                                :options="salesChartOptions"
                            />
                        </div>
                    </div>
                    <div
                        class="flex flex-col w-2/5 h-80 bg-white rounded-lg p-4"
                    >
                        <span class="text-xl font-semibold"
                            >Profit By Category</span
                        >
                        <div class="flex items-center justify-center h-64">
                            <Pie :data="profitChart" :options="profitOptions" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full bg-white rounded-lg h-full">
                    <span class="text-lg font-semibold p-4"
                        >Inventory List</span
                    >
                    <div class="border-t border-neutral-40"></div>
                    <div
                        v-for="inventory in inventoryList"
                        class="flex flex-row p-4 justify-between items-center"
                    >
                        <span>{{ inventory[0] }}</span>
                        <span>{{ inventory[1] }} pcs</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-2/5 rounded-lg bg-white">
                <div class="flex flex-row h-16 items-center gap-4 px-4">
                    <InboxIcon class="w-6 h-6" />
                    <span class="text-lg font-semibold">Inbox</span>
                </div>
                <div class="border-t border-neutral-40"></div>
                <div
                    v-for="inbox in inboxes"
                    class="p-4 items-center w-full overflow-auto"
                >
                    <div
                        v-if="inbox.transaction != undefined"
                        class="flex flex-row gap-4 w-full"
                    >
                        <IconContainer icon="transaction" />
                        <div class="flex flex-col w-full">
                            <span class="text-sm"
                                >Rp{{
                                    inbox.transaction.order_group.orders
                                        .reduce(
                                            (acc, num) =>
                                                acc +
                                                num.quantity * num.item.price,
                                            0,
                                        )
                                        .toLocaleString("id")
                                }}</span
                            >
                            <div
                                v-for="order in inbox.transaction.order_group
                                    .orders"
                                class="flex flex-row w-full justify-between items-center"
                            >
                                <span class="flex text-xs">{{
                                    order.item.name
                                }}</span>
                                <div class="flex flex-row items-center gap-4">
                                    <span class="text-xs"
                                        >{{ order.quantity }}x</span
                                    >
                                    <span class="text-xs"
                                        >Rp{{
                                            order.item.price.toLocaleString(
                                                "id",
                                            )
                                        }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="inbox.log != undefined">
                        <div
                            v-if="inbox.log.add != undefined"
                            class="flex flex-row gap-4 w-full"
                        >
                            <IconContainer icon="add" />
                            <div class="flex flex-col w-full">
                                <span class="text-sm text-danger-main"
                                    >-Rp{{
                                        inbox.log.add.product.items
                                            .reduce(
                                                (acc, num) =>
                                                    acc +
                                                    num.quantity *
                                                        num.buy_price,
                                                0,
                                            )
                                            .toLocaleString("id")
                                    }}</span
                                >
                                <span class="text-xs">{{
                                    inbox.log.add.product.name
                                }}</span>
                                <div
                                    v-for="item in inbox.log.add.product.items"
                                    :key="item.itemId"
                                    class="flex flex-row w-full justify-between items-center"
                                >
                                    <span class="flex text-xs"
                                        >#{{ item.itemId }}</span
                                    >
                                    <div
                                        class="flex flex-row items-center gap-4"
                                    >
                                        <span class="text-xs"
                                            >{{ item.quantity }}x</span
                                        >
                                        <span class="text-xs"
                                            >Rp{{
                                                item.buy_price.toLocaleString(
                                                    "id",
                                                )
                                            }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="inbox.log.delete != undefined"
                            class="flex flex-row gap-4 w-full"
                        >
                            <IconContainer icon="delete" />
                            <div class="flex flex-col w-full">
                                <span class="text-sm text-danger-main"
                                    >Delete
                                    {{ inbox.log.delete.product.name }}</span
                                >
                                <div class="flex flex-row justify-between">
                                    <span class="text-xs">Total</span>
                                    <span class="text-xs"
                                        >Rp{{
                                            inbox.log.delete.product.items
                                                .reduce(
                                                    (acc, num) =>
                                                        acc +
                                                        num.quantity *
                                                            num.buy_price,
                                                    0,
                                                )
                                                .toLocaleString("id")
                                        }}</span
                                    >
                                </div>
                                <div
                                    v-for="item in inbox.log.delete.product
                                        .items"
                                    :key="item.itemId"
                                    class="flex flex-row w-full justify-between items-center"
                                >
                                    <span class="flex text-xs"
                                        >#{{ item.itemId }}</span
                                    >
                                    <div
                                        class="flex flex-row items-center gap-4"
                                    >
                                        <span class="text-xs"
                                            >{{ item.quantity }}x</span
                                        >
                                        <span class="text-xs"
                                            >Rp{{
                                                item.buy_price.toLocaleString(
                                                    "id",
                                                )
                                            }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="inbox.log.update != undefined">
                            <IconContainer icon="update" />
                        </div>
                        <div
                            v-else-if="inbox.log.restock != undefined"
                            class="flex flex-row gap-4 w-full"
                        >
                            <IconContainer icon="restock" />
                            <div class="flex flex-col w-full">
                                <span class="text-sm text-danger-main"
                                    >-Rp{{
                                        (
                                            inbox.log.restock.price *
                                            inbox.log.restock.added_stock
                                        ).toLocaleString("id")
                                    }}</span
                                >
                                <div
                                    class="flex flex-row w-full justify-between items-center"
                                >
                                    <span class="flex text-xs">{{
                                        inbox.log.restock.name
                                    }}</span>
                                    <div
                                        class="flex flex-row items-center gap-4"
                                    >
                                        <span class="text-xs"
                                            >{{
                                                inbox.log.restock.added_stock
                                            }}x</span
                                        >
                                        <span class="text-xs"
                                            >Rp{{
                                                inbox.log.restock.price.toLocaleString(
                                                    "id",
                                                )
                                            }}</span
                                        >
                                    </div>
                                </div>
                                <div class="flex flex-row justify-end gap-2">
                                    <span class="text-sm">{{
                                        inbox.log.restock.original_stock
                                    }}</span>
                                    <span class="text-sm">>></span>
                                    <span class="text-sm text-success-main">{{
                                        inbox.log.restock.original_stock +
                                        inbox.log.restock.added_stock
                                    }}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            v-else-if="inbox.log.sell != undefined"
                            class="flex flex-row gap-4 w-full"
                        >
                            <IconContainer icon="sell" />
                            <div class="flex flex-col w-full">
                                <span class="text-sm text-success-main"
                                    >+Rp{{
                                        inbox.log.sell.total_profit.toLocaleString(
                                            "id",
                                        )
                                    }}</span
                                >
                                <div
                                    v-for="product in inbox.log.sell
                                        .sold_products"
                                    class="flex flex-row w-full justify-between items-center"
                                >
                                    <span class="flex text-xs">{{
                                        product.name
                                    }}</span>
                                    <div
                                        class="flex flex-row items-center gap-4"
                                    >
                                        <span class="text-xs"
                                            >{{
                                                product.items.reduce(
                                                    (acc, num) =>
                                                        acc + num.quantity,
                                                    0,
                                                )
                                            }}x</span
                                        >
                                        <span class="text-xs text-success-main"
                                            >Rp{{
                                                product.items
                                                    .reduce(
                                                        (acc, num) =>
                                                            acc +
                                                            (product.sell_price -
                                                                num.buy_price),
                                                        0,
                                                    )
                                                    .toLocaleString("id")
                                            }}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { Line, Pie } from "vue-chartjs";
import { useAuthStore } from "@/auth/auth.store";
import { container } from "@/di";
import type { Log } from "@/domain/log/model/Log";
import type { Transaction } from "@/domain/transaction/model/Transaction";
import type { User } from "@/domain/user/model/User";
import { TOKENS } from "@/token";
import { InboxIcon } from "@heroicons/vue/24/outline";
import { computed, onMounted, ref, watch } from "vue";
import type { Inbox } from "./Inbox";
import IconContainer from "@/components/container/IconContainer.vue";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

const $auth = useAuthStore();
const transaction_repo = container.get(TOKENS.TransactionRepository);
const log_repo = container.get(TOKENS.LogRepository);
const user_repo = container.get(TOKENS.UserRepository);
const transactions = ref<Transaction[]>([]);
const logs = ref<Log[]>([]);
const user = ref<User>();

onMounted(async () => {
    if ($auth.user_doc === null) return;
    transactions.value = await transaction_repo.get(
        $auth.user_doc?.branch_uuid,
    );
    console.log(transactions.value);
    logs.value = await log_repo.get($auth.user_doc?.branch_uuid);
    user.value = $auth.user_doc;
});

const inboxes = computed(() => {
    const transactionInbox = transactions.value.map((t) => {
        return {
            transaction: t,
            created_at: t.created_at,
        } as Inbox;
    });
    const logInbox = logs.value.map((l) => {
        return {
            log: l,
            created_at: l.created_at,
        } as Inbox;
    });
    const inboxList = transactionInbox.concat(logInbox);
    inboxList.sort((a, b) => {
        return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
    });
    return inboxList;
});

const transactionTotal = computed(() => {
    return transactions.value.reduce(
        (acc, t) => acc + getTransactionTotal(t),
        0,
    );
});

function getTransactionTotal(transaction: Transaction) {
    return transaction.order_group.orders.reduce(
        (acc, o) => acc + o.quantity * o.item.price,
        0,
    );
}

const profitTotal = computed(() => {
    return logs.value
        .filter((l) => l.sell !== undefined)
        .reduce((acc, l) => acc + (l.sell?.total_profit ?? 0), 0);
});

const expenseTotal = computed(() => {
    const restockExpense = logs.value
        .filter((l) => l.restock !== undefined)
        .reduce(
            (acc, l) =>
                acc + (l.restock?.price ?? 0) * (l.restock?.added_stock ?? 0),
            0,
        );
    const addExpense = logs.value
        .filter((l) => l.add !== undefined)
        .reduce(
            (acc, l) =>
                acc +
                (l.add?.product.items.reduce(
                    (acc, i) => acc + i.buy_price * i.quantity,
                    0,
                ) ?? 0),
            0,
        );
    return restockExpense + addExpense;
});

const inventoryList = computed(() => {
    const inventory: Map<string, number> = new Map();
    transactions.value.forEach((t) => {
        t.order_group.orders.forEach((o) => {
            if (inventory.has(o.item.name)) {
                inventory.set(
                    o.item.name,
                    (inventory.get(o.item.name) ?? 0) + o.quantity,
                );
            } else {
                inventory.set(o.item.name, o.quantity);
            }
        });
    });
    return inventory;
});

const salesMap = computed(() => {
    const groupedMap = new Map<string, Transaction[]>();
    transactions.value.forEach((item) => {
        const date = item.created_at.toDate();
        const dateString = date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
        console.log(dateString);
        if (!groupedMap.has(dateString)) {
            groupedMap.set(dateString, []);
        }

        groupedMap.get(dateString)?.push(item);
    });

    const salesMap = new Map<string, number>();

    groupedMap.forEach((value, key) => {
        if (!salesMap.has(key)) {
            salesMap.set(key, 0);
        }
        salesMap.set(
            key,
            value.reduce(
                (acc, num) =>
                    acc +
                    num.order_group.orders.reduce(
                        (acc2, num2) => acc2 + num2.quantity * num2.item.price,
                        0,
                    ),
                0,
            ),
        );
    });
    console.log(salesMap);

    return salesMap;
});

const salesChartData = computed(() => ({
    labels: Array.from(salesMap.value.keys()),
    datasets: [
        {
            label: "Data",
            data: Array.from(salesMap.value.values()),
            backgroundColor: "#002F34",
            borderColor: "#002F34",
            borderWidth: 1,
            tension: 0.4,
        },
    ],
}));

const salesChartOptions = ref({
    scales: {
        y: {
            beginAtZero: true,
        },
    },
});

const profitChart = computed(() => ({
    labels: Array.from(inventoryList.value.keys()),
    datasets: [
        {
            backgroundColor: ["#002F34", "#D0EFEF", "#FFF4EA"],
            data: Array.from(inventoryList.value.values()),
        },
    ],
}));

const profitOptions = {
    responsive: true,
    maintainAspectRatio: true,
};
</script>
