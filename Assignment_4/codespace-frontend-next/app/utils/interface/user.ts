export interface SignUpUser{
    userId:number,
    name:string,
    email:string,
    role:string,
    password:string,
    confirmPassword:string,
}

export interface User {
    name: string;
    email: string;
    role: string;
}
  

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isAuthorised:boolean;
  }

// {
//     "userId": 1,
//     "name": "dp",
//     "email": "www.dp@gmail.com",
//     "role": "coder",
//     "password": "12345",
//     "confirmPassword": "12345"
// }