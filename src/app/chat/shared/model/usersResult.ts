import { UsersOutParam } from "./usersOutParam";

export class UsersResult {
    code: number;
    msg: string;
    data: Array<UsersOutParam>;
}