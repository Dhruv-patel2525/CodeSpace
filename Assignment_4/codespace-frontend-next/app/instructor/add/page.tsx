"use client";

import { useState } from "react";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    courseCode: "",
    instructorEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Add New Course</h2>

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
