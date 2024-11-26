import { useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./page.module.css";

const CourseDetails = () => {
  // useEffect(() => {
  //   // Dynamically import Bootstrap JS for interactive features like the navbar toggler
  //   import("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  return (
    <>
      <Head>
        <title>Course Details - CodeSpace</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={`${classes.courseDetailsSection} py-5`}>
        <div className="container">
          <h2 className={`text-center mb-5 ${classes.courseTitle}`}>TEST</h2>

          <div className={`mb-4 ${classes.courseDescription}`}>
            <h4>Course Description:</h4>
            <p>Test</p>
          </div>

          <div className={`mb-4 ${classes.courseSyllabus}`}>
            <h4>Syllabus:</h4>
            <ul>
              <li>TEST</li>
            </ul>
          </div>

          <div className={`mb-4 ${classes.instructorDetails}`}>
            <h4>Instructor:</h4>
            <p>TEST</p>
          </div>

          <div className="text-center">
            <button className={`btn btn-success ${classes.enrollButton}`}>
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
