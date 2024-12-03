"use client"
import {  usePathname, useRouter } from "next/navigation";
import Login from "@/components/forms/login";
import { useAuth } from "@/components/contexts/AuthContext";
import { setTokens } from "@/app/utils/TokenUtils";

export default function LoginPage() {
    const router= useRouter();
    const pathname= usePathname();
    const {dispatch}=useAuth();
    const handleLogin=async (email:string,password:string)=>{
        try{
            const res=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,{
                method:'POST',
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify({ email, password }),}
            );
            if (res.ok) {
                const response = await res.json();
                const { accessToken, refreshToken, email, role, name } =response;
                setTokens(accessToken);
                const user={
                  email:email,
                  role:role,
                  name:name,
                }
                localStorage.setItem('user',JSON.stringify(user));
                //document.cookie = `authToken=${accessToken}; path=/; Secure; HttpOnly`;
                console.log(response);
                console.log(`access Token ${accessToken}`);
                console.log("LoginPage" + user);
                dispatch({
                  type: "LOGIN",
                  payload: { user, token: accessToken },
                });
                console.log(pathname);
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