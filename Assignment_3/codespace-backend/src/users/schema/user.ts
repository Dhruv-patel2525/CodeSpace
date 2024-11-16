import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import {  UserRole } from "src/auth/enums/roles.enum";

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User{
    @Prop()
    userId:number;
    @Prop()
    name:string;
    @Prop({
        required:true,
    })
    email:string;
    
    
    @Prop({
        type: String,
        enum: UserRole, 
        default: UserRole.CODER, 
      })
    role:UserRole;
    @Prop({
        required:true,
    })
    password:string;
    @Prop()
    confirmPassword:string;

    @Prop()
    resetToken?: string;  
    @Prop({ default: new Date() }) 
    lastLogout: Date; 
}
export const UserSchema=SchemaFactory.createForClass(User);