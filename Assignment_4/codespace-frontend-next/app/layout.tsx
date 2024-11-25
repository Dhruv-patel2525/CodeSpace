import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "@/components/general/InstallBootstrap";
import NavBar from "@/components/navbar/NavBar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/> 
      <InstallBootstrap/>
      </head>
      <body >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}