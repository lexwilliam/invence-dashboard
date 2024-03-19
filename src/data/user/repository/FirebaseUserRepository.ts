import type { User } from "@/domain/user/model/User";
import type { UserRepository } from "@/domain/user/repository/UserRepository";
import { Collections } from "@/firebase/collections";
import {
    collection,
    doc,
    getDoc,
    type CollectionReference,
    type Firestore,
} from "firebase/firestore";
import { MapUserDtoToDomain, type UserDto } from "../model/UserDto";
import { injected } from "brandi";
import { TOKENS } from "@/token";
import { getApp } from "firebase/app";

export class FirebaseUserRepository implements UserRepository {
    firestore: Firestore;
    collection: CollectionReference;

    constructor(firestore: Firestore) {
        this.firestore = firestore;
        this.collection = collection(this.firestore, Collections.user);
    }

    async get(uuid: string): Promise<User> {
        const result = await getDoc(doc(this.collection, uuid));
        if (!result.exists()) {
            throw new Error("User not found");
        }
        return MapUserDtoToDomain(result.data() as UserDto);
    }
}

injected(FirebaseUserRepository, TOKENS.Firestore);
