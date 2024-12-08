"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchWithAuth } from "@/app/utils/api/api";
import { clearTokens } from "@/app/utils/TokenUtils";
import { NavItem } from "./NavItem";
import NavToggle from "./NavToggle";

interface NavBarProps {
  navLinks: { href: string; label: string }[];
}

export default function NavBar({ navLinks }: NavBarProps) {
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      console.log("Inside Logout");
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`;
      const options = { method: "POST" };
      await fetchWithAuth(url, options);
      clearTokens();
      router.push("/");
    } catch (error) {
      console.error("Error in logoutHandler:", error);
    }
  };

  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <Link className="navbar-brand" href="#">
            CodeSpace
          </Link>
          <NavToggle />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            {navLinks.map((link:any, index:any) => (
                <NavItem key={index} link={link} onClick={logoutHandler} />
              ))}
                </ul>
          </div>
        </div>
      </nav>
    </header>
  )
  // return (
  //   <header>
  //     <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  //       <div className="container">
  //         <Link className="navbar-brand" href="#">
  //           CodeSpace
  //         </Link>
  //         <div className="collapse navbar-collapse" id="navbarNav">
  //           <ul className="navbar-nav ms-auto">
  //             {navLinks.map((link, index) => (
  //               <li className="nav-item" key={index}>
  //                 {link.label === "Logout" ? (
  //                   <button
  //                     className="nav-link"
  //                     onClick={logoutHandler}
  //                     style={{
  //                       background: "none",
  //                       border: "none",
  //                       cursor: "pointer",
  //                       padding: 0,
  //                     }}
  //                   >
  //                     {link.label}
  //                   </button>
  //                 ) : (
  //                   <Link className="nav-link" href={link.href}>
  //                     {link.label}
  //                   </Link>
  //                 )}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </header>
  // );
}
