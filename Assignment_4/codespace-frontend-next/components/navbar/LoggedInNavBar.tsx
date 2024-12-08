"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import NavToggle from "./NavToggle";
import { NavItem } from "./NavItem";
import { useAuth } from "../contexts/AuthContext";


export default function NavBar()
{
    const {state,dispatch}=useAuth();
    const router=useRouter();
    const pathName=usePathname();
   
    const logoutHandler=()=>{
        try{
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
        {href:"",label:"Logout"}
    ]
    const navLinks=useMemo(()=>{
        switch(pathName){
            case "/login":
                return defaultNavLinks.filter(link => link.href!=="/login" && link.label!=="Logout");
            case "/signUp":
                return defaultNavLinks.filter(link=>link.href!=="/signUp" && link.label!=="Logout");
            case "/":
                return defaultNavLinks.filter(link =>  link.label!=="Logout");
            default:
                return defaultNavLinks.filter(link => link.href!=="/login" && link.href!=="/signup");
        }
    },[pathName]);
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