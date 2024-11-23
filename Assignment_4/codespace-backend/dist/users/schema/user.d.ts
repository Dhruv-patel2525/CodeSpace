import { HydratedDocument } from "mongoose";
import { UserRole } from "src/auth/enums/roles.enum";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    userId: number;
    name: string;
    email: string;
    role: UserRole;
    password: string;
    confirmPassword: string;
    resetToken?: string;
    lastLogout: Date;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
