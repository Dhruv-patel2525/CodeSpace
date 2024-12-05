"use client";

import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
} from "@ionic/react";

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
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{description || "No description available"}</p>
        <p>
          <strong>Instructor:</strong> {instructor}
        </p>

        {role === "learner" ? (
          <>
            <IonButton
              expand="block"
              onClick={() => handleCourse(id)}
              color="primary">
              View Course
            </IonButton>
            <IonButton
              expand="block"
              onClick={() => handleCourse2(id)}
              color="secondary">
              Enroll Now
            </IonButton>
          </>
        ) : (
          <>
            <IonButton
              expand="block"
              onClick={() => handleCourse2(id)}
              color="warning">
              Edit Course
            </IonButton>
            <IonButton
              expand="block"
              onClick={() => handleCourse(id)}
              color="danger">
              Delete Course
            </IonButton>
          </>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default CourseCard;
