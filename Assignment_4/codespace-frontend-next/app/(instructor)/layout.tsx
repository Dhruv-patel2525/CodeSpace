"use client";

import NavBar from "@/components/navbar/NavBar";


export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/instructor", label: "Courses" },
    { href: "", label: "Logout" },
  ];

  return (
    <>
    <NavBar navLinks={navLinks} />
    <main style={{ backgroundColor: "#e6f7ff" }}>{children}</main>
  </>
  );
}
