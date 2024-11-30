"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseGrid from "./components/courseGrid";
import { useRouter } from "next/navigation";

const CourseDetails = () => {
  const [courses, setCourses] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    fetch("http://localhost:3003/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) =>
        setCourses(
          data.map((course: any) => ({
            ...course,
            id: course._id,
          }))
        )
      )
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courses) {
    return <div>Loading...</div>;
  }
  console.log("Current data state:", courses);

  const handleCourse = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <>
      <Head>
        <title>All Courses - CodeSpace</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container py-5">
        <h2 className="text-center mb-5">All Courses</h2>
        <CourseGrid
          courses={courses}
          handleCourse={handleCourse}
          role={"learner"}
        />
      </div>
    </>
  );
};

export default CourseDetails;
