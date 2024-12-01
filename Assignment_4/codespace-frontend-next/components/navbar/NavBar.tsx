"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import NavToggle from "./NavToggle";
import { NavItem } from "./NavItem";
import { useAuth } from "../contexts/AuthContext";
import { fetchWithAuth } from "@/app/utils/api/api";


export default function NavBar()
{
    const {state,dispatch}=useAuth();
    const router=useRouter();
    const pathName=usePathname();
    const { isAuthenticated, user } = state;
   
    const logoutHandler=()=>{
        try{
            const url=`${process.env.NEXTNEXT_PUBLIC_API_BASE_URL}/auth/logout`;
            fetchWithAuth(url,{},state.token||"");
            dispatch({type:"LOGOUT",});
            router.push("/");
        }
        catch(error)
        {
            console.log("error in logoutHandler " +error);
        }
    }
    const defaultNavLinks=[
        {href:"/",label:"Home"},
        {href:"/login",label:"Login"},
        {href:"/signUp",label:"Sign Up"},
        {href:"",label:"Logout",onClick:logoutHandler}
    ]
    const loggedInNavLinks = {
        admin: [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/users", label: "Manage Users" },
          { href: "", label: "Logout", onClick: logoutHandler },
        ],
        coder: [
          { href: "/", label: "Home" },
          { href: "/problems", label: "Problems" },
          {href: "/courses",label:"Courses"},
          { href: "", label: "Logout", onClick: logoutHandler },
        ],
        instructor: [
          { href: "/add", label: "Add" },
          { href: "", label: "Logout", onClick: logoutHandler },
        ],
      };
    
    const navLinks=useMemo(()=>{
        if (!isAuthenticated) {
            switch (pathName) {
              case "/login":
                return defaultNavLinks.filter(link => link.href !== "/login" && link.label !== "Logout");
              case "/signUp":
                return defaultNavLinks.filter(link => link.href !== "/signUp" && link.label !== "Logout");
              case "/":
                return defaultNavLinks.filter(link => link.label !== "Logout");
              default:
                return defaultNavLinks.filter(link => link.href !== "/login" && link.href !== "/signUp");
            }
          } else {
            const userRole = (user?.role || "user") as keyof typeof loggedInNavLinks;
            return loggedInNavLinks[userRole] || [];
          }
    },[isAuthenticated, user, pathName]);
    return <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
        <Link className="navbar-brand" href="#">CodeSpace</Link>
        <NavToggle/>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                {
                    navLinks.map((link,index)=>(<NavItem onClick={logoutHandler} key={index} link={link}/>))
                }
            </ul>
        </div>
        </div>
     </nav>
    </header>
}