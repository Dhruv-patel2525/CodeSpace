"use client";

import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
} from "@ionic/react";
import CourseGrid from "../../components/courseGrid";
import "./instructorPage.css";

const InstructorPage: React.FC = () => {
  const instructorEmail = "hirad@example.com";
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const addCourses = () => {
    console.log("Navigate to create course page");
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/courses/instructor?email=${instructorEmail}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(
          data.map((course: any) => ({
            ...course,
            id: course._id,
          }))
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const deleteCourse = async (id: string) => {
    try {
      await fetch(`http://localhost:3003/courses/${id}`, {
        method: "DELETE",
      });
      setCourses(courses.filter((course) => course.id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

  const editCourse = (id: string) => {
    console.log(`Navigate to edit course page for course ID: ${id}`);
  };

  if (loading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonSpinner name="crescent" />
        </IonContent>
      </IonPage>
    );
  }

  if (error) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Error</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>{error}</p>
        </IonContent>
      </IonPage>
    );
  }

  if (!courses.length) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div className="centered-content">
            <div className="mb-3">No courses available...</div>
            <IonButton expand="block" onClick={addCourses}>
              Create New Course
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="courseDetailsSection ion-padding">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-center mb-5">My Courses</h2>
            <IonButton expand="block" onClick={addCourses}>
              Create New Course
            </IonButton>
          </div>
          <IonGrid>
            <IonRow>
              <CourseGrid
                courses={courses}
                handleCourse={deleteCourse}
                handleCourse2={editCourse}
                role={"instructor"}
              />
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InstructorPage;
