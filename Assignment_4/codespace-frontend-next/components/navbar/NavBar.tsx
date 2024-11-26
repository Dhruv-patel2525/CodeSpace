"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import NavToggle from "./NavToggle";
import { NavItem } from "./NavItem";

const defaultNavLinks=[
    {href:"/",label:"Home"},
    {href:"/login",label:"Login"},
    {href:"/signUp",label:"Sign Up"},
]
export default function NavBar()
{
    const pathName=usePathname();
    const navLinks=useMemo(()=>{
        switch(pathName){
            case "/login":
                return defaultNavLinks.filter(link => link.href!=="/login");
            case "/signUp":
                return defaultNavLinks.filter(link=>link.href!=="/signUp");
            case "/":
                return defaultNavLinks.filter(link => link.href!=="/");
            default:
                return defaultNavLinks;
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
                    navLinks.map((link,index)=>(<NavItem key={index} link={link}/>))
                }
            </ul>
        </div>
        </div>
     </nav>
    </header>
}