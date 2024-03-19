import type { TransactionRepository } from "@/domain/transaction/repository/TransactionRepository";
import { Collections } from "@/firebase/collections";
import { TOKENS } from "@/token";
import { injected } from "brandi";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
    type CollectionReference,
    type Firestore,
} from "firebase/firestore";
import {
    MapTransactionToDomain,
    type TransactionDto,
} from "../model/TransactionDto";
import type { Transaction } from "@/domain/transaction/model/Transaction";

export class FirebaseTransactionRepository implements TransactionRepository {
    firestore: Firestore;
    collection: CollectionReference;

    constructor(firestore: Firestore) {
        this.firestore = firestore;
        this.collection = collection(this.firestore, Collections.transaction);
    }

    async get(branch_uuid: string): Promise<Transaction[]> {
        const result = await getDocs(
            query(
                this.collection,
                where("branch_uuid", "==", branch_uuid),
                where("deleted_at", "==", null),
            ),
        );
        return result.docs.map((doc) =>
            MapTransactionToDomain(doc.data() as TransactionDto),
        );
    }
}

injected(FirebaseTransactionRepository, TOKENS.Firestore);
