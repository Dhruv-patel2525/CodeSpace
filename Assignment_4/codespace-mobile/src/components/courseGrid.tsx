import React from "react";
import CourseCard from "./courseCard";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

interface CoursesGridProps {
  courses: Courses[];
  handleCourse: (id: string) => void;
  handleCourse2: (id: string) => void;
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
  handleCourse2,
  role,
}) => {
  return (
    <IonGrid>
      <IonRow>
        {courses.map((course) => (
          <IonCol size="12" size-md="6" size-lg="4" key={course.id}>
            <CourseCard
              id={course.id}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              role={role}
              handleCourse={handleCourse}
              handleCourse2={handleCourse2}
            />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default CourseGrid;
