import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ViewCourse = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3003/courses/${id}`)
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
