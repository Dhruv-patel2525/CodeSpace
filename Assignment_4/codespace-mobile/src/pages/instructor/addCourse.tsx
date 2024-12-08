import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonLoading,
  IonTextarea,
} from "@ionic/react";
import useCourseForm from "../../components/useCourseForm";

const AddCourse: React.FC = () => {
  const {
    formData,
    error,
    loading,
    successMessage,
    handleChange,
    handleSubmit,
  } = useCourseForm();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = "http://localhost:3003/courses";
    handleSubmit(e, apiUrl);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleFormSubmit}>
          <IonItem>
            <IonLabel position="stacked">Course Title</IonLabel>
            <IonInput
              value={formData.title}
              onIonChange={(e) => handleChange("title", e.detail.value || "")}
              required
              type="text"
              placeholder="Enter course title"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Course Description</IonLabel>
            <IonTextarea
              value={formData.description}
              onIonChange={(e) =>
                handleChange("description", e.detail.value || "")
              }
              required
              placeholder="Enter course description"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Instructor Name</IonLabel>
            <IonInput
              value={formData.instructor}
              onIonChange={(e) =>
                handleChange("instructor", e.detail.value || "")
              }
              required
              type="text"
              placeholder="Enter instructor name"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Course Duration</IonLabel>
            <IonInput
              value={formData.duration}
              onIonChange={(e) =>
                handleChange("duration", e.detail.value || "")
              }
              required
              type="text"
              placeholder="Enter course duration"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Course Code</IonLabel>
            <IonInput
              value={formData.courseCode}
              onIonChange={(e) =>
                handleChange("courseCode", e.detail.value || "")
              }
              required
              type="text"
              placeholder="Enter course code"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Instructor Email</IonLabel>
            <IonInput
              value={formData.instructorEmail}
              onIonChange={(e) =>
                handleChange("instructorEmail", e.detail.value || "")
              }
              required
              type="email"
              placeholder="Enter instructor email"
            />
          </IonItem>

          {error && (
            <IonText color="danger">
              <p>{error}</p>
            </IonText>
          )}

          {successMessage && (
            <IonText color="success">
              <p>{successMessage}</p>
            </IonText>
          )}

          <IonButton
            expand="block"
            type="submit"
            className="ion-margin-top"
            disabled={loading}>
            Create Course
          </IonButton>
        </form>

        <IonLoading isOpen={loading} message={"Processing..."} />
      </IonContent>
    </IonPage>
  );
};

export default AddCourse;
