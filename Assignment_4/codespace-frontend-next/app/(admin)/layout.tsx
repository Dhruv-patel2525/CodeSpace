"use client";

import NavBar from "@/components/navbar/NavBar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/users", label: "Manage Users" },
    { href: "", label: "Logout" },
  ];

  return (
    <>
    <NavBar navLinks={navLinks} />
    <main style={{ backgroundColor: "#fff8e1" }}>{children}</main>
  </>
  );
}
