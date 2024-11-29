import React from "react";
import styles from "../styles/page.module.css";
import router, { Router, useRouter } from "next/router";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  handleCourse: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  handleCourse,
}) => {
  return (
    <div className={`card ${styles.courseCard}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description || "No description available"}</p>
        <p>
          <strong>Instructor:</strong> {instructor}
        </p>
        <button
          className="btn btn-success me-2"
          onClick={() => handleCourse(id)}>
          View Course
        </button>
        <button className="btn btn-success">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
