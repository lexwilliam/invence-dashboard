<template>
    <div>
        <div
            v-if="icon === 'transaction'"
            class="flex justify-center items-center w-8 h-8 rounded-lg bg-tertiary-main"
        >
            <BanknotesIcon class="w-4 h-4 text-primary-main"></BanknotesIcon>
        </div>
        <div
            v-else-if="icon === 'add'"
            class="flex justify-center items-center w-8 h-8 rounded-lg bg-primary-main"
        >
            <PlusIcon class="w-4 h-4 text-white"></PlusIcon>
        </div>
        <div
            v-else-if="icon === 'update'"
            class="flex justify-center items-center w-8 h-8 rounded-lg bg-primary-main"
        >
            <PencilIcon class="w-4 h-4 text-white"></PencilIcon>
        </div>
        <div
            v-else-if="icon === 'delete'"
            class="flex justify-center items-center w-8 h-8 rounded-lg bg-primary-main"
        >
            <TrashIcon class="w-4 h-4 text-white"></TrashIcon>
        </div>
        <div
            v-else-if="icon === 'sell'"
            class="flex justify-center items-center w-8 h-8 rounded-lg bg-secondary-main"
        >
            <CurrencyDollarIcon
                class="w-4 h-4 text-primary-main"
            ></CurrencyDollarIcon>
        </div>
        <div
            v-else-if="icon === 'restock'"
            class="flex justify-center items-center w-8 h-8 rounded-lg bg-secondary-main"
        >
            <ArchiveBoxIcon class="w-4 h-4 text-primary-main"></ArchiveBoxIcon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    ArchiveBoxIcon,
    BanknotesIcon,
    CurrencyDollarIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/vue/24/outline";

defineProps<{
    icon: string;
}>();
</script>

<style></style>
