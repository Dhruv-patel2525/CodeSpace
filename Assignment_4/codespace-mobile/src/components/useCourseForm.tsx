import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useCourseForm = (courseId?: string) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    courseCode: "",
    instructorEmail: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (courseId) {
      setLoading(true);
      fetch(`http://localhost:3003/courses/details/${courseId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch course details");
          }
          return response.json();
        })
        .then((data) => {
          setFormData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [courseId]);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent, apiUrl: string) => {
    if (e) {
      e.preventDefault(); // Ensure the event is available before calling preventDefault
    }

    setLoading(true);

    if (
      !formData.title ||
      !formData.description ||
      !formData.instructor ||
      !formData.duration ||
      !formData.courseCode ||
      !formData.instructorEmail
    ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      let courseData;
      const updatedFormData = { ...formData };

      // Clean up unnecessary fields
      delete updatedFormData._id;
      delete updatedFormData.lastUpdated;
      delete updatedFormData.__v;

      if (courseId) {
        // Update existing course
        courseData = await fetch(`${apiUrl}/${courseId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        });
      } else {
        // Create new course
        courseData = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      if (!courseData.ok) {
        throw new Error("Failed to submit course data");
      }

      setSuccessMessage(
        courseId ? "Course Updated Successfully" : "Course Created Successfully"
      );
      setTimeout(() => {
        history.push("/instructor");
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    error,
    loading,
    successMessage,
    handleChange,
    handleSubmit,
  };
};

export default useCourseForm;
