"use client";
import React from "react";
import CourseCard from "./courseCard";

interface CoursesGridProps {
  courses: Courses[];
  handleCourse: (id: string) => void;
  role: string;
}
interface Courses {
  id: string;
  title: string;
  description: string;
  instructor: string;
  role: string;
}

const CourseGrid: React.FC<CoursesGridProps> = ({
  courses,
  handleCourse,
  role,
}) => {
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
            role={role}
            handleCourse={handleCourse}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
