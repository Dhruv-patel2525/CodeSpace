import React from "react";
import styles from "../styles/page.module.css";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  instructor,
}) => {
  return (
    <div className={`card ${styles.courseCard}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description || "No description available"}</p>
        <p>
          <strong>Instructor:</strong> {instructor}
        </p>
        <button className="btn btn-success">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
