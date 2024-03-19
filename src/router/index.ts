import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/auth/auth.store";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    const $auth = useAuthStore();
    await $auth.initialize();
    if (!$auth.isAuthenticated && to.name) {
        if (to.name !== "login") {
            next({ name: "login" });
            return;
        }
    }
    next();
    return;
});

export default router;
