"use client";

import { useParams } from "next/navigation"; // Import useParams from next/navigation
import { useEffect, useState } from "react";

const ViewCourse = () => {
  const { id } = useParams(); // Use useParams() to get the course id from the URL
  const [course, setCourse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the course data from the backend using the courseId
      fetch(`http://localhost:3003/courses/details/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setCourse(data))
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>Loading...</div>;

  return (
    <div className="container py-5">
      <h1>{course.title}</h1>
      <img
        src={course.banner || "/default-banner.jpg"}
        alt={`${course.title} Banner`}
        className="img-fluid mb-4"
      />
      <p>{course.description}</p>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Start Date:</strong> {course.startDate}
      </p>
      <p>
        <strong>Course Code:</strong> {course.courseCode}
      </p>

      <h3>Syllabus</h3>
      {/* Optionally render the syllabus if it exists */}
      {/* <ul>
        {course.syllabus?.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul> */}

      <button className="btn btn-success mt-4">Enroll Now</button>
    </div>
  );
};

export default ViewCourse;
