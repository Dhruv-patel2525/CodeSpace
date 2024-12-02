"use client";

import { headers } from "next/headers";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddCourse = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    //console.log(formData);
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
      const courseData = await fetch("http://localhost:3003/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!courseData.ok) {
        throw new Error("Failed to create course");
      }
      router.push("/instructor");
      setSuccessMessage("Course Created Successfully");
      setTimeout(() => {
        router.push("/instructor");
      }, 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add New Course</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Course Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="instructor" className="form-label">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            className="form-control"
            value={formData.instructor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Course Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            className="form-control"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="courseCode" className="form-label">
            Course Code
          </label>
          <input
            type="text"
            id="courseCode"
            name="courseCode"
            className="form-control"
            value={formData.courseCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructorEmail" className="form-label">
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            className="form-control"
            value={formData.instructorEmail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
