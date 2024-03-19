import type { Log } from "@/domain/log/model/Log";
import type { LogRepository } from "@/domain/log/repository/LogRepository";
import { Collections } from "@/firebase/collections";
import { TOKENS } from "@/token";
import { injected } from "brandi";
import {
    collection,
    getDocs,
    query,
    where,
    type CollectionReference,
    type Firestore,
} from "firebase/firestore";
import { MapLogDtoToDomain, type LogDto } from "../model/LogDto";
import {
    MapTransactionToDomain,
    type TransactionDto,
} from "@/data/transaction/model/TransactionDto";

export class FirebaseLogRepository implements LogRepository {
    firestore: Firestore;
    collection: CollectionReference;

    constructor(firestore: Firestore) {
        this.firestore = firestore;
        this.collection = collection(this.firestore, Collections.log);
    }

    async get(branch_uuid: string): Promise<Log[]> {
        const result = await getDocs(
            query(
                this.collection,
                where("branch_uuid", "==", branch_uuid),
                where("deleted_at", "==", null),
            ),
        );
        return result.docs.map((doc) =>
            MapLogDtoToDomain(doc.data() as LogDto),
        );
    }
}

injected(FirebaseLogRepository, TOKENS.Firestore);
