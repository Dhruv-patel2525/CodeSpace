"use client"
import Link from "next/link";
import classes from "./landing.module.css";
import NavBar from "../navbar/NavBar";
import { getUser } from "@/app/utils/TokenUtils";
import { useState, useEffect } from "react";
type Role = "defaultNavLinks" | "coder" | "instructor" | "admin";

type User = {
  role?: Role; // Role is optional to handle cases where no role is found
};
const navLinksList: Record<Role, { href: string; label: string }[]> = {
  defaultNavLinks: [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
    { href: "/signUp", label: "Sign Up" },
  ],
  coder: [
    { href: "/", label: "Home" },
    { href: "/problems", label: "Problems" },
    { href: "/courses", label: "Courses" },
    { href: "", label: "Logout" },
  ],
  instructor: [
    { href: "/", label: "Home" },
    { href: "/instructor", label: "Courses" },
    { href: "", label: "Logout" },
  ],
  admin: [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/users", label: "Manage Users" },
    { href: "", label: "Logout" },
  ],
};

export default function LandingPage() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>("defaultNavLinks");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user: User = JSON.parse(storedUser);
      setUser(user);
      setRole(user?.role || "defaultNavLinks");
    }
  }, []);
  const navLinks = navLinksList[role];
  if (!user) {
    return <></>;
  }
  return (
    <>
      <NavBar navLinks={navLinks} />

      <section className={classes["intro-section"]}>
        <div className="container">
          <h1 className={classes["intro-h1"]}>
            Master Coding, Solve Problems, Build the Future
          </h1>
          <p className={classes["intro-p"]}>
            Learn by doing, challenge yourself, and collaborate with coders from
            around the globe.
          </p>
          <Link
            href="/problems"
            className={`${classes["intro-button"]} btn btn-primary`}>
            Get Started
          </Link>
        </div>
      </section>
      <section className={classes["features-section"]}>
        <div className="container">
          <h2 className="mb-5">Our Platform Features</h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <Link href="/courses" className="text-decoration-none text-dark">
                <div className={`card h-100 ${classes["feature-item"]}`}>
                  <i className={`fas fa-book ${classes["feature-icon"]}`}></i>
                  <h3>Courses</h3>
                  <p>
                    Access structured learning paths to master different
                    programming languages.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <Link href="/problems" className="text-decoration-none text-dark">
                <div className={`card ${classes["feature-item"]} h-100`}>
                  <i className={`fas fa-brain ${classes["feature-icon"]}`}></i>
                  <h3>Practice Problems</h3>
                  <p>
                    Solve problems of varying difficulty to hone your skills and
                    boost your confidence.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <Link
                href="/coding_competition"
                className="text-decoration-none text-dark">
                <div className={`card ${classes["feature-item"]} h-100`}>
                  <i className={`fas fa-trophy ${classes["feature-icon"]}`}></i>
                  <h3>Coding Competitions</h3>
                  <p>
                    Challenge yourself with live competitions and win rewards.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <Link
                href="/community"
                className="text-decoration-none text-dark">
                <div className={`card ${classes["feature-item"]} h-100`}>
                  <i className={`fas fa-users ${classes["feature-icon"]}`}></i>
                  <h3>Community Support</h3>
                  <p>
                    Join a vibrant community of coders to ask questions and
                    share knowledge.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={classes["cta-section"]}>
        <div className="container">
          <h2>Ready to Start Your Coding Journey?</h2>
          <button className="btn btn-light">Join Now</button>
        </div>
      </section>
    </>
  );
}