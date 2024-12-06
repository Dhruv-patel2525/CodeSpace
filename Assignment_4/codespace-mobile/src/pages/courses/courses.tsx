"use client";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonSpinner,
} from "@ionic/react";
import CourseGrid from "../../components/courseGrid";
import "./courses.css";

const CourseDetails: React.FC = () => {
  const userEmail = "viswa@example.com";
  const history = useHistory();
  const [courses, setCourses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchCourses = async (tab: string) => {
    const url =
      tab === "enrolled"
        ? `http://localhost:3003/courses/enrolled/${userEmail}`
        : `http://localhost:3003/courses`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCourses(data.map((course: any) => ({ ...course, id: course._id })));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCourses(selectedTab);
  }, [selectedTab]);

  const goToCourseDetails = (courseId: string) => {
    history.push(`/courses/${courseId}`);
  };

  const enrollUser = (courseId: string) => {
    console.log(`Enroll user in course ID: ${courseId}`);
  };

  if (loading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Courses</IonTitle>
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="courseTitle">Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment
          value={selectedTab}
          onIonChange={(e) => {
            const value = e.detail.value;
            if (value) {
              setSelectedTab(value);
            }
          }}
          className="courseDetailsSection">
          <IonSegmentButton value="all">
            <IonLabel>All Courses</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enrolled">
            <IonLabel>Enrolled Courses</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <IonGrid>
          <IonRow>
            <CourseGrid
              courses={courses}
              handleCourse={goToCourseDetails}
              handleCourse2={enrollUser}
              role={"learner"}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CourseDetails;
