"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseGrid from "./components/courseGrid";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/contexts/AuthContext";

const CourseDetails = () => {
  const { state } = useAuth();
  const [courses, setCourses] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("all");
  const router = useRouter();
  const userEmail = state.user?.email;

  const fetchCourses = async (tab: string) => {
    const url =
      tab === "enrolled"
        ? `http://localhost:3003/courses/enrolled/${userEmail}`
        : `http://localhost:3003/courses`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCourses(data.map((course: any) => ({ ...course, id: course._id })));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    fetchCourses(selectedTab);
  }, [selectedTab]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courses) {
    return <div>Loading...</div>;
  }

  const handleCourse = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  const enrollUser = async (courseId: string) => {
    if (!userEmail) {
      console.error("User is not logged in or email is missing.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3003/courses/${courseId}/enroll`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: userEmail,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error enrolling user");
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Enrollment error:", err);
    }
  };

  return (
    <>
      <Head>
        <title>All Courses - CodeSpace</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container py-5">
        <h2 className="text-center mb-5">Courses</h2>

        <div className="mb-4 text-center">
          <button
            className={`btn ${
              selectedTab === "all" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setSelectedTab("all")}>
            All Courses
          </button>
          <button
            className={`btn ${
              selectedTab === "enrolled" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setSelectedTab("enrolled")}>
            Enrolled Courses
          </button>
        </div>

        <CourseGrid
          courses={courses}
          handleCourse={handleCourse}
          handleCourse2={enrollUser}
          role={"learner"}
        />
      </div>
    </>
  );
};

export default CourseDetails;
