"use client";

import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonButton,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { useParams } from "react-router-dom";

const ViewCourse: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
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

  if (error) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Error</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Error: {error}</p>
        </IonContent>
      </IonPage>
    );
  }

  if (!course) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Loading</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonSpinner name="crescent" />
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{course.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonImg
            src={course.banner || "/default-banner.jpg"}
            alt={`${course.title} Banner`}
          />
          <IonCardHeader>
            <IonCardTitle>{course.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
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
            {course.syllabus ? (
              <ul>
                {course.syllabus.map((topic: string, index: number) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            ) : (
              <p>No syllabus available.</p>
            )}

            <IonButton expand="block" color="success" className="mt-4">
              Enroll Now
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ViewCourse;
