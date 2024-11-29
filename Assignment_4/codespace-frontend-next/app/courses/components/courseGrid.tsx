import React from "react";
import CourseCard from "./courseCard";

interface CoursesGridProps {
  courses: Courses[];
  handleCourse: (id: string) => void;
}
interface Courses {
  id: string;
  title: string;
  description: string;
  instructor: string;
}

const CourseGrid: React.FC<CoursesGridProps> = ({ courses, handleCourse }) => {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <div
          key={course.id}
          className="col-md-4 mb-4 d-flex align-items-stretch">
          <CourseCard
            id={course.id}
            title={course.title}
            description={course.description}
            instructor={course.instructor}
            handleCourse={handleCourse}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
