"use client";

import NavBar from "@/components/navbar/NavBar";


export default function Layout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
    { href: "/signUp", label: "Sign Up" },
  ];

  return (
    <>
      <NavBar navLinks={navLinks} />
      <main>{children}</main>
    </>
  );
}
