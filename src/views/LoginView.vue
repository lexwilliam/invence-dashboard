<template>
    <div class="w-screen h-screen">
        <div
            class="flex flex-col w-full h-full justify-center items-center gap-6 px-12"
        >
            <div class="flex flex-col items-center gap-2">
                <h1 class="text-2xl font-bold">Get Started</h1>
            </div>
            <PrimaryButton @click="signIn">
                <template #text>Sign in with Google</template>
            </PrimaryButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/auth/auth.store";
import PrimaryButton from "@/components/button/PrimaryButton.vue";
import TextField from "@/components/textfield/TextField.vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/vue/24/solid";
import { FirebaseError } from "firebase/app";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const $router = useRouter();
const $auth = useAuthStore();

const loggingIn = ref(false);

const error = ref("");
const signIn = async () => {
    if (loggingIn.value) return;
    loggingIn.value = true;
    try {
        await $auth.signInWithGoogle();
        $router.push({ name: "home" });
    } catch (e) {
        console.error(e);
        error.value = "Unknown Error";

        loggingIn.value = false;
    }
};

onMounted(() => {
    if ($auth.user) $router.push({ name: "home" });
});
</script>

<style scoped></style>
