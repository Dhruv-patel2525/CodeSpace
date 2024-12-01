"use client"
import SignUp from "@/components/forms/signup";
import { useRouter } from "next/navigation";

export default function SignUpPage(props:any) {
    const router= useRouter();
    const handleSignUp=async (signUpData:any)=>{
        try{
            const res=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/registerUser`,{
                method:'POST',
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify(signUpData),}
            );
            if (res.ok) {
                alert(`User created successfuly`);
                router.push('/login');
              } else {
                const error=await res.json();
                console.log("SignUp failed:", error.message || "Unknown error");
                alert(`SignUp failed: ${error.message || "Please try again."}`);
              }        
        }
        catch(error)
        {
            console.log("Error Logging In"+error);
            
        }
    }
    return <SignUp onHandleSignUp={handleSignUp}></SignUp>
}
