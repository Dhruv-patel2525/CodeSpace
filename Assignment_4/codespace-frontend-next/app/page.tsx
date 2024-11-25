import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
  <>
  <section className={classes["intro-section"]}>
    <div className="container">
      <h1 className={classes["intro-h1"]}>Master Coding, Solve Problems, Build the Future</h1>
      <p className={classes["intro-p"]}>Learn by doing, challenge yourself, and collaborate with coders from around the globe.</p>
      <Link href="/learner" className={`${classes["intro-button"]} btn btn-primary`}>Get Started</Link>      
      </div>
  </section>
    <section className={classes["features-section"]}>
    <div className="container">
      <h2 className="mb-5">Our Platform Features</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <a href="coursePage.html" className="text-decoration-none text-dark">
              <div className={`card h-100 ${classes["feature-item"]}`}>
                  <i className={`fas fa-book ${classes["feature-icon"]}`}></i>
                  <h3>Courses</h3>
                  <p>Access structured learning paths to master different programming languages.</p>
              </div>
          </a>
      </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <a href="/problems" className="text-decoration-none text-dark" >
          <div className={`card ${classes["feature-item"]} h-100`}>
            <i className={`fas fa-brain ${classes["feature-icon"]}`}></i>
            <h3>Practice Problems</h3>
            <p>Solve problems of varying difficulty to hone your skills and boost your confidence.</p>
          </div>
        </a>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className={`card ${classes["feature-item"]} h-100`}>
            <i className={`fas fa-trophy ${classes["feature-icon"]}`}></i>
            <h3>Coding Competitions</h3>
            <p>Challenge yourself with live competitions and win rewards.</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className={`card ${classes["feature-item"]} h-100`}>
            <i className={`fas fa-users ${classes["feature-icon"]}`}></i>
            <h3>Community Support</h3>
            <p>Join a vibrant community of coders to ask questions and share knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className={classes["cta-section"]}>
    <div className="container">
      <h2>Ready to Start Your Coding Journey?</h2>
      <button className="btn btn-light">Join Now</button>
    </div>
  </section>
  </>
  );
}
