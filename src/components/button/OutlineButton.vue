<script setup lang="ts">
const props = defineProps<{
    disabled?: boolean;
    buttonClass?: string;
}>();

defineEmits<{
    (e: "click"): void;
}>();
</script>

<template>
    <button
        class="rounded disabled:cursor-not-allowed"
        :class="[
            buttonClass,
            disabled
                ? 'bg-neutral-40 text-neutral-60 hover:bg-neutral-40 focus:bg-neutral-40 active:bg-neutral-40'
                : 'border border-mono-outline bg-mono-main text-neutral-100 hover:border-neutral-40 hover:bg-neutral-20 focus:border-2 focus:border-[#F3C4CE] focus:bg-neutral-10 active:border-neutral-40 active:bg-neutral-10',
        ]"
        :disabled="disabled"
        @click="$emit('click')"
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
