import { Container } from "brandi";
import { initializeApp } from "firebase/app";
import { TOKENS } from "./token";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
    useFirebaseApp,
    useFirebaseFirestore,
    useFirebaseAuth,
} from "./firebase/useFirebase";
import { FirebaseUserRepository } from "./data/user/repository/FirebaseUserRepository";
import { FirebaseTransactionRepository } from "./data/transaction/repository/FirebaseTransactionRepository";
import { FirebaseLogRepository } from "./data/log/repository/FirebaseLogRepository";

export const container = new Container();

container.bind(TOKENS.FirebaseAppFactory).toFactory(() => {
    return initializeApp({
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_KEY,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    });
});

container.bind(TOKENS.FirestoreFactory).toFactory(() => {
    const firestore = getFirestore(container.get(TOKENS.FirebaseApp));
    return firestore;
});
container.bind(TOKENS.FirebaseAuthFactory).toFactory(() => {
    const auth = getAuth(container.get(TOKENS.FirebaseApp));
    return auth;
});

container
    .bind(TOKENS.FirebaseApp)
    .toInstance(useFirebaseApp)
    .inSingletonScope();
container
    .bind(TOKENS.Firestore)
    .toInstance(useFirebaseFirestore)
    .inSingletonScope();
container
    .bind(TOKENS.FirebaseAuth)
    .toInstance(useFirebaseAuth)
    .inSingletonScope();

container
    .bind(TOKENS.UserRepository)
    .toInstance(FirebaseUserRepository)
    .inSingletonScope();
container
    .bind(TOKENS.TransactionRepository)
    .toInstance(FirebaseTransactionRepository)
    .inSingletonScope();
container
    .bind(TOKENS.LogRepository)
    .toInstance(FirebaseLogRepository)
    .inSingletonScope();
