<script setup lang="ts">
defineProps<{
    disabled?: boolean;
}>();

defineEmits<{
    (e: "click"): void;
}>();
</script>

<template>
    <button
        class="rounded disabled:cursor-not-allowed p-4"
        :class="[
            disabled
                ? 'bg-neutral-40 text-neutral-60 hover:bg-neutral-40 focus:bg-neutral-40 active:bg-neutral-40'
                : 'bg-primary-main text-white hover:bg-primary-hover focus:bg-primary-hover active:bg-primary-pressed',
        ]"
        :disabled="disabled"
        @click="
            () => {
                if (disabled) return;
                $emit('click');
            }
        "
    >
        <div
            class="flex flex-row justify-center items-center gap-3 transition-transform"
        >
            <slot name="icon"></slot>
            <slot name="text"></slot>
        </div>
    </button>
</template>

<style scoped></style>
