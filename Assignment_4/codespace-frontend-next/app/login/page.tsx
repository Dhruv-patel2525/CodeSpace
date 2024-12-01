"use client"
import { redirect, useRouter } from "next/navigation";
import Login from "@/components/forms/login";
import { cookies } from "next/headers";
import type { NextApiRequest, NextApiResponse } from 'next';
import { useAuth } from "@/components/contexts/AuthContext";

export default function LoginPage() {
    const router= useRouter();
    const {dispatch}=useAuth();
    const handleLogin=async (email:string,password:string,res: NextApiResponse)=>{
        try{
            const res=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,{
                method:'POST',
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify({ email, password }),}
            );
            if (res.ok) {
                const response = await res.json();
                const { accesstoken,refreshToken, email,role,name}=response;
                document.cookie = `authToken=${accesstoken}; path=/; Secure; HttpOnly`;
                const user={
                    email:email,
                    name:name,
                    role:role,
                }            
                //    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; for logout
                console.log(response);
                console.log("LoginPage"+user);
                dispatch({type:"LOGIN",payload:{user,token:accesstoken}});
                if(user.role==="instructor")
                {
                    router.push("/instructor");
                }
                else if(user.role==="coder")
                {
                    router.push("/problems");
                }
                else
                {
                    router.push("/admin");
                }
                
              } else {
                const error=await res.json();
                console.log("Login failed:", error.message || "Unknown error");
                alert(`Login failed: ${error.message || "Please try again."}`);
              }        
        }
        catch(error)
        {
            console.log("Error Logging In"+error);
            
        }
    }
    return (
        <Login onHandleLogin={handleLogin}></Login>
    );
}