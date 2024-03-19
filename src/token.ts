import { token, type Factory } from "brandi";
import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";
import type { UserRepository } from "./domain/user/repository/UserRepository";
import type { LogRepository } from "./domain/log/repository/LogRepository";
import type { TransactionRepository } from "./domain/transaction/repository/TransactionRepository";

export const TOKENS = {
    FirebaseAppFactory: token<Factory<FirebaseApp>>("FirebaseAppFactory"),
    FirebaseAuthFactory: token<Factory<Auth>>("FirebaseAuthFactory"),
    FirestoreFactory: token<Factory<Firestore>>("FirestoreFactory"),
    FirebaseApp: token<FirebaseApp>("FirebaseApp"),
    Firestore: token<Firestore>("Firestore"),
    FirebaseAuth: token<Auth>("FirebaseAuth"),
    UserRepository: token<UserRepository>("UserRepository"),
    LogRepository: token<LogRepository>("LogRepository"),
    TransactionRepository: token<TransactionRepository>("TransactionRepository")
};
