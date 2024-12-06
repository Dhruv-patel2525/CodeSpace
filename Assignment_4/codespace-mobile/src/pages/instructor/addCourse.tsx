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
    e.preventDefault(); // Prevent default form submission
    const apiUrl = "http://localhost:3003/courses";
    handleSubmit(e, apiUrl); // Submit the form data using the API URL
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
          {/* Title Field */}
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

          {/* Description Field */}
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

          {/* Instructor Name Field */}
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

          {/* Duration Field */}
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

          {/* Course Code Field */}
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

          {/* Instructor Email Field */}
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

          {/* Error Message */}
          {error && (
            <IonText color="danger">
              <p>{error}</p>
            </IonText>
          )}

          {/* Success Message */}
          {successMessage && (
            <IonText color="success">
              <p>{successMessage}</p>
            </IonText>
          )}

          {/* Submit Button */}
          <IonButton
            expand="block"
            type="submit"
            className="ion-margin-top"
            disabled={loading}>
            Create Course
          </IonButton>
        </form>

        {/* Loading Indicator */}
        <IonLoading isOpen={loading} message={"Processing..."} />
      </IonContent>
    </IonPage>
  );
};

export default AddCourse;
