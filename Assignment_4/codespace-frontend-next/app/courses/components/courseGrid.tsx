import React from "react";
import CourseCard from "./courseCard";

interface CoursesGridProps {
  courses: Courses[];
}
interface Courses {
  title: string;
  description: string;
  instructor: string;
}

const CourseGrid: React.FC<CoursesGridProps> = ({ courses }) => {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
          <CourseCard
            title={course.title}
            description={course.description}
            instructor={course.instructor}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
