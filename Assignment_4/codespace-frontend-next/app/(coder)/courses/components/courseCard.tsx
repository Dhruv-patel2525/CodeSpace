"use client";
import React from "react";
import styles from "../styles/page.module.css";
import router, { Router, useRouter } from "next/router";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  role: string;
  handleCourse: (id: string) => void;
  handleCourse2: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  role,
  handleCourse,
  handleCourse2,
}) => {
  return (
    <div className={`card ${styles.courseCard}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description || "No description available"}</p>
        <p>
          <strong>Instructor:</strong> {instructor}
        </p>

        {role === "learner" ? (
          <>
            <button
              className="btn btn-success me-2"
              onClick={() => handleCourse(id)}>
              View Course
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleCourse2(id)}>
              Enroll Now
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-success me-2"
              onClick={() => handleCourse2(id)}>
              Edit Course
            </button>
            <button
              className="btn btn-success"
              onClick={() => handleCourse(id)}>
              Delete Course
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
