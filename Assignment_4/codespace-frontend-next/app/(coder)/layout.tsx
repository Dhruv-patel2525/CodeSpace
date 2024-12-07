"use client";

import NavBar from "@/components/navbar/NavBar";

// import NavBar from "../NavBar";

export default function CoderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/problems", label: "Problems" },
    { href: "/courses", label: "Courses" },
    { href: "", label: "Logout" },
  ];

  return (
    <>
      <NavBar navLinks={navLinks} />
      <main style={{ backgroundColor: "#f5f5f5" }}>{children}</main>
    </>
  );
}
