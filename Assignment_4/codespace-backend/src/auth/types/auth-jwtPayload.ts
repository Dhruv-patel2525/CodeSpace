export type AuthPayload = {accessToken:string,refreshToken:string,userId:number,email:string,role:string,name:string};
export type AuthJwtPayload = {
    sub:number,username:string,role:string,iat:number
}