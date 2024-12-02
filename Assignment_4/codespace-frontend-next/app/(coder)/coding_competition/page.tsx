"use client";
import { useState, useEffect } from "react";

const CodingCompetition = () => {
  const [timeLeft, setTimeLeft] = useState<any>({});
  const targetDate = new Date("2024-12-15T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5 text-center">
      <h2 className="text-primary mb-4">Coding Competition - Coming Soon!</h2>

      <div className="alert alert-info mb-4">
        <h4>Get ready for the coding challenge! It’s starting soon.</h4>
      </div>

      <div className="countdown-timer mb-4">
        <h3>Time Left:</h3>
        <div className="d-flex justify-content-center">
          <div className="timer-box">
            <h4>{timeLeft.days}</h4>
            <p>DD:</p>
          </div>
          <div className="timer-box">
            <h4>{timeLeft.hours}</h4>
            <p>HH:</p>
          </div>
          <div className="timer-box">
            <h4>{timeLeft.minutes}</h4>
            <p>MM:</p>
          </div>
          <div className="timer-box">
            <h4>{timeLeft.seconds}</h4>
            <p>SS</p>
          </div>
        </div>
      </div>

      <div>
        <button className="btn btn-warning btn-lg">Stay Updated</button>
      </div>
    </div>
  );
};

export default CodingCompetition;
