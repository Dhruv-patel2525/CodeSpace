"use client";
import { useParams } from "next/navigation";
import { useCourseForm } from "../../components/useCourseForm";
import CourseForm from "../../components/courseForm";
import React from "react";

const EditCourse = () => {
  const { id } = useParams();

  const courseId = Array.isArray(id) ? id[0] : id;

  const {
    formData,
    error,
    loading,
    successMessage,
    handleChange,
    handleSubmit,
  } = useCourseForm(courseId);
  return (
    <CourseForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      successMessage={successMessage}
      courseId={courseId}
    />
  );
};

export default EditCourse;
