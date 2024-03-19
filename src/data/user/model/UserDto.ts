import type { User } from "@/domain/user/model/User";

export type UserDto = {
  uuid: string;
  branch_uuid: string;
  name: string;
  email: string;
  created_at: Date;
};

export function MapUserDtoToDomain(
    data: Partial<UserDto>
): User {
    return {
        uuid: data.uuid ?? "",
        branch_uuid: data.branch_uuid ?? "",
        name: data.name ?? "",
        email: data.email ?? "",
        created_at: data.created_at ?? new Date()
    }
}
