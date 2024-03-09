import { container } from "@/di";
import { TOKENS } from "@/token";
import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let firestore: Firestore | undefined;

export const useFirebaseApp = () => {
  app ??= container.get(TOKENS.FirebaseAppFactory)();
  return app;
};

export const useFirebaseFirestore = () => {
  firestore ??= container.get(TOKENS.FirestoreFactory)();
  return firestore;
};

export const useFirebaseAuth = () => {
  auth ??= container.get(TOKENS.FirebaseAuthFactory)();
  return auth;
};