import { fetchWithAuth } from "@/app/utils/api/api";
import { getAccessToken } from "@/app/utils/TokenUtils";
import { useAuth } from "@/components/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useCourseForm = (courseId?: string) => {
  const { state } = useAuth();
  const router = useRouter();
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
      const url = `http://localhost:3003/courses/details/${courseId}`;
      fetchWithAuth(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent, apiUrl: string) => {
    e.preventDefault();
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
      delete updatedFormData._id;
      delete updatedFormData.lastUpdated;
      delete updatedFormData.__v;
      delete updatedFormData.enrolledStudents;

      if (courseId) {
        const url = `${apiUrl}/${courseId}`;
        courseData = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
          body: JSON.stringify(updatedFormData),
        });
      } else {
        courseData = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
          body: JSON.stringify(formData),
        });
      }

      if (!courseData.ok) {
        throw new Error("Failed to submit course data");
      }

      const responseData = await courseData.json();
      setSuccessMessage(
        courseId ? "Course Updated Successfully" : "Course Created Successfully"
      );

      setTimeout(() => {
        router.push("/instructor");
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
