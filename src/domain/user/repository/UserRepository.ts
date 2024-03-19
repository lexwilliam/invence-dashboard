import type { User } from "../model/User";

export interface UserRepository {
    get(uuid: string): Promise<User>
}