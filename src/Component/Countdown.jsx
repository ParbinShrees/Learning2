import { useState, useEffect } from "react";
import "./Day6.css";

const START_TIME = 30;

function Countdown() {
  const [seconds, setSeconds] = useState(START_TIME);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  const progress = (seconds / START_TIME) * 100;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  const resetTimer = () => {
    setRunning(false);
    setSeconds(START_TIME);
  };

  return (
    <section className="day6-card timer-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">HOMEWORK 02</p>
          <h2>⏱️ Countdown Timer</h2>
          <p className="subtitle">Start, stop and reset the timer</p>
        </div>

        <div className={`timer-status ${running ? "active" : ""}`}>
          <span></span>
          {running ? "Running" : "Paused"}
        </div>
      </div>

      <div className="timer-display">
        <div className="timer-number">{formattedTime}</div>

        <p>
          {seconds === 0
            ? "🎉 Time's up!"
            : running
            ? "Timer is running..."
            : "Ready when you are"}
        </p>
      </div>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="timer-buttons">
        <button
          className="primary-btn"
          onClick={() => setRunning(true)}
          disabled={running || seconds === 0}
        >
          ▶ Start
        </button>

        <button
          className="secondary-btn"
          onClick={() => setRunning(false)}
          disabled={!running}
        >
          ⏸ Stop
        </button>

        <button className="reset-btn" onClick={resetTimer}>
          ↻ Reset
        </button>
      </div>
    </section>
  );
}

export default Countdown;