import { container } from "@/di";
import type { User } from "@/domain/user/model/User";
import { TOKENS } from "@/token";
import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    type User as FirebaseUser,
} from "firebase/auth";
import { defineStore } from "pinia";

const auth = container.get(TOKENS.FirebaseAuth);
const user_repo = container.get(TOKENS.UserRepository);

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as FirebaseUser | null,
        user_doc: null as User | null,
        unsubscribe: null as (() => void) | null,
    }),
    getters: {
        isAuthenticated(): boolean {
            return this.user !== null;
        },
    },
    actions: {
        initialize(): Promise<FirebaseUser | null> {
            if (this.user !== null) return Promise.resolve(this.user);
            return new Promise<FirebaseUser | null>(
                (r) =>
                    (this.unsubscribe = onAuthStateChanged(
                        auth,
                        async (user) => {
                            this.user = user;
                            console.log(this.user);
                            if (user !== null) {
                                this.user_doc = await user_repo.get(user.uid);
                            }
                            this.unsubscribe?.();
                            this.unsubscribe = null;
                            r(this.user);
                        },
                    )),
            );
        },
        async signInWithGoogle() {
            const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
                .then(async (result) => {
                    this.user = result.user;
                    this.user_doc = await user_repo.get(result.user.uid);
                })
                .catch((error) => {
                    throw error;
                });
        },
    },
});
