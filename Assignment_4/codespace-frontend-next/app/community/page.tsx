"use client";

import Head from "next/head";
import styles from "./styles/page.module.css";

const CommunityPage = () => {
  return (
    <>
      <Head>
        <title>Community - CodeSpace</title>
        <meta name="description" content="Community page" />
      </Head>

      <div className={`container py-5 ${styles.communityPage}`}>
        <h1 className="text-center text-primary mb-5">
          Welcome to the Community!
        </h1>
        <section className={`${styles.section} my-5`}>
          <h2 className="text-center text-info">About the Community</h2>
          <p className="lead text-center">
            This is the space where learners and instructors connect, share
            ideas, and grow together. Whether you're looking for guidance or
            inspiration, this community has got you covered.
          </p>
        </section>
        <section className={`${styles.section} my-5`}>
          <h2 className="text-center text-warning">Upcoming Events</h2>
          <ul className="list-unstyled">
            <li className={styles.eventItem}>New Course Launch - Dec 10</li>
            <li className={styles.eventItem}>
              Weekly Coding Challenge - Dec 15
            </li>
            <li className={styles.eventItem}>
              Webinar on Mobile Development - Dec 20
            </li>
          </ul>
        </section>
        <section className={`${styles.section} my-5`}>
          <h2 className="text-center text-success">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <a className="btn btn-primary btn-lg d-block mb-3">Resources</a>
            </li>
            <li>
              <a className="btn btn-secondary btn-lg d-block">
                Contact Support
              </a>
            </li>
          </ul>
        </section>

        <footer className="text-center mt-5">
          <p className="text-muted">&copy; 2024 CodeSpace Community</p>
        </footer>
      </div>
    </>
  );
};

export default CommunityPage;
