"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseGrid from "../courses/components/courseGrid";
import styles from "../courses/styles/page.module.css";
import { useRouter } from "next/navigation";
const InstructorPage = () => {
  const router = useRouter();
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const instructorEmail = "hirad@example.com";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/courses/instructor?email=${instructorEmail}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchCourses();
  }, []);

  if (error) {
    return <div className="container py-5">Error: {error}</div>;
  }

  if (!courses.length) {
    return <div className="container py-5">No courses available...</div>;
  }
  const addCourses = () => {
    router.push("/instructor/add");
  };

  return (
    <div className={`container py-5 ${styles.courseDetailsSection}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center mb-5">My Courses</h2>
        <button className="btn btn-primary" onClick={addCourses}>
          Create New Course
        </button>
      </div>
      <CourseGrid courses={courses} />
    </div>
  );
};

export default InstructorPage;
