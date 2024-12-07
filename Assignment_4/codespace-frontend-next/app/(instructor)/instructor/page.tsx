"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseGrid from "../../(coder)/courses/components/courseGrid";
import styles from "../courses/styles/page.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/contexts/AuthContext";
const InstructorPage = () => {
  const router = useRouter();
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { state } = useAuth();
  const instructorEmail = state.user?.email;
  const addCourses = () => {
    router.push("/instructor/add");
  };

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
        setCourses(
          data.map((course: any) => ({
            ...course,
            id: course._id,
          }))
        );
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
    <>
      <div className="container py-5">
        <div className="centered-content">
          <div className="mb-3">No courses available...</div>
          <button className="btn btn-primary" onClick={addCourses}>
            Create New Course
          </button>
        </div>
      </div>
    </>;
  }

  function deleteCourse(id: string): void {
    console.log(id);
    fetch(`http://localhost:3003/courses/${id}`, {
      method: "DELETE",
    });
  }
  function editCourse(id: string): void {
    router.push(`/instructor/edit/${id}`);
  }
  return (
    <div className={`container py-5 ${styles.courseDetailsSection}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center mb-5">My Courses</h2>
        <button className="btn btn-primary" onClick={addCourses}>
          Create New Course
        </button>
      </div>
      <CourseGrid
        courses={courses}
        handleCourse={deleteCourse}
        handleCourse2={editCourse}
        role={"instructor"}
      />
    </div>
  );
};

export default InstructorPage;
