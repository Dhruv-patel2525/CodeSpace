"use client";

import ProtectedRoute from "@/components/Authetication/protectedRoute";
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
    <ProtectedRoute roles={["instructor"]}>
    <NavBar navLinks={navLinks} />
    <main style={{ backgroundColor: "#e6f7ff" }}>{children}</main>
  </ProtectedRoute>
  );
}
