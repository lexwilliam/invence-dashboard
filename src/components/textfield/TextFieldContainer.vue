<script setup lang="ts">
import {
    ExclamationTriangleIcon,
    CheckBadgeIcon,
} from "@heroicons/vue/24/solid";

defineProps<{
    label?: string;
    hint?: string;
    callbackType?: string;
    callbackMessage?: string;
    type: "text" | "textarea";
}>();
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-row justify-between" v-if="label || hint">
            <span class="font-regular text-sm leading-4 text-neutral-100">
                {{ label }}
            </span>
            <span
                class="font-regular text-xs text-neutral-60"
                v-if="(hint?.length ?? 0) > 0"
            >
                {{ hint }}
            </span>
        </div>
        <slot></slot>
        <div
            v-if="callbackType"
            class="flex flex-row gap-3"
            :class="[
                callbackType === 'success' ? 'text-success-main' : '',
                callbackType === 'warning' ? 'text-danger-main' : '',
                callbackType === 'error' ? 'text-error-main' : '',
            ]"
        >
            <ExclamationTriangleIcon
                v-if="callbackType === 'warning' || callbackType === 'error'"
                class="w-[13.13px] min-h-[12.14px] mt-1"
            />
            <CheckBadgeIcon
                v-else-if="callbackType === 'success'"
                class="w-[13.13px] min-h-[12.14px] mt-1"
            />
            <span class="font-semibold text-xs leading-4">{{
                callbackMessage
            }}</span>
        </div>
    </div>
</template>

<style scoped></style>
