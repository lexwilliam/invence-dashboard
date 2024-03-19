<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import TextFieldContainer from "./TextFieldContainer.vue";

const focus: Ref<boolean> = ref(false);

withDefaults(
    defineProps<{
        hint?: string;
        callbackType?: string;
        callbackMessage?: string;
        placeholder?: string;
        readonly?: boolean;
        disabled?: boolean;
        label?: string;
        inputContainerClass?: string | string[];
        inputTextClass?: string;
        modelValue?: string;
        type?: string;
    }>(),
    {
        type: "text",
    },
);

defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "focus"): void;
    (e: "enter"): void;
}>();
</script>

<template>
    <TextFieldContainer
        :label="label"
        :hint="hint"
        :callback-type="callbackType"
        :callback-message="callbackMessage"
        :type="'text'"
    >
        <div
            class="flex flex-row justify-between items-center rounded gap-3.5 border"
            :class="[
                focus ? 'border-primary-main' : 'border-neutral-30',
                disabled ? 'cursor-no-drop bg-neutral-20' : 'cursor-default',
                inputContainerClass,
            ]"
        >
            <slot name="left-icon"> </slot>
            <input
                :type="type"
                class="w-full text-lg bg-transparent text-neutral-100 focus:outline-none placeholder:font-light placeholder:text-neutral-50 read-only:placeholder:text-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-50"
                :class="inputTextClass ?? ''"
                :placeholder="placeholder ?? 'Placeholder'"
                @focus="
                    () => {
                        focus = true;
                        $emit('focus');
                    }
                "
                @blur="focus = false"
                :readonly="readonly"
                :disabled="disabled"
                :value="modelValue"
                @input="
                    $emit(
                        'update:modelValue',
                        ($event.target as HTMLInputElement).value,
                    )
                "
                @keydown.enter="$emit('enter')"
            />
            <slot name="right-icon"> </slot>
        </div>
    </TextFieldContainer>
</template>

<style scoped></style>
