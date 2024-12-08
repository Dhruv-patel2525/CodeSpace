"use client";
import { useRouter } from "next/navigation";
import { useCourseForm } from "../components/useCourseForm";
import CourseForm from "../components/courseForm";

const AddCourse = () => {
  const router = useRouter();
  const {
    formData,
    error,
    loading,
    successMessage,
    handleChange,
    handleSubmit,
  } = useCourseForm();
  return (
    <CourseForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      successMessage={successMessage}
    />
  );
};

export default AddCourse;
