import { useEffect, useRef, useState } from "react";

function Countdown() {
  const INITIAL_TIME = 90;

  const [time, setTime] = useState(INITIAL_TIME);
  const [running, setRunning] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const audioContextRef = useRef(null);

  // Create a small browser-generated sound
  const playSound = (type = "tick") => {
    if (!soundOn) return;

    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    const audioContext = audioContextRef.current;

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "finish") {
      // Longer sound when timer finishes
      oscillator.frequency.setValueAtTime(
        600,
        audioContext.currentTime
      );

      oscillator.frequency.setValueAtTime(
        900,
        audioContext.currentTime + 0.15
      );

      oscillator.frequency.setValueAtTime(
        600,
        audioContext.currentTime + 0.3
      );

      gainNode.gain.setValueAtTime(
        0.3,
        audioContext.currentTime
      );

      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.6
      );

      oscillator.start();

      oscillator.stop(
        audioContext.currentTime + 0.6
      );
    } else {
      // Short sound every 30 seconds
      oscillator.frequency.value = 800;

      gainNode.gain.setValueAtTime(
        0.25,
        audioContext.currentTime
      );

      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.3
      );

      oscillator.start();

      oscillator.stop(
        audioContext.currentTime + 0.3
      );
    }
  };

  // Timer
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((previousTime) => {
        const newTime = previousTime - 1;

        // Every 30 seconds
        if (
          newTime > 0 &&
          newTime % 30 === 0
        ) {
          playSound("tick");
        }

        // Timer finished
        if (newTime <= 0) {
          playSound("finish");
          setRunning(false);

          return 0;
        }

        return newTime;
      });
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [running]);

  // Reset timer
  const resetTimer = () => {
    setRunning(false);
    setTime(INITIAL_TIME);
  };

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Calculate progress
  const progress =
    ((INITIAL_TIME - time) / INITIAL_TIME) * 100;

  return (
    <div className="day6-card timer-card">
      
      {/* Header */}
      <div className="card-header">
        <div>
          <p className="eyebrow">
            FOCUS SESSION
          </p>

          <h2>Countdown Timer</h2>

          <p className="subtitle">
            A React timer using useEffect and setInterval.
          </p>
        </div>

        <div
          className={`timer-status ${
            running ? "active" : ""
          }`}
        >
          <span></span>

          {running ? "Running" : "Paused"}
        </div>
      </div>

      {/* Timer */}
      <div className="timer-display">

        <div className="timer-number">
          {formatTime(time)}
        </div>

        <p>
          {time === 0
            ? "Session complete"
            : running
            ? "Stay focused"
            : "Ready to begin"}
        </p>

      </div>

      {/* Progress */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      {/* Buttons */}
      <div className="timer-buttons">

        {!running ? (
          <button
            className="primary-btn"
            onClick={() => {
              if (time === 0) {
                setTime(INITIAL_TIME);
              }

              setRunning(true);
            }}
          >
            Start
          </button>
        ) : (
          <button
            className="secondary-btn"
            onClick={() => setRunning(false)}
          >
            Pause
          </button>
        )}

        <button
          className="reset-btn"
          onClick={resetTimer}
        >
          Reset
        </button>

        <button
          className="sound-btn"
          onClick={() => setSoundOn(!soundOn)}
        >
          {soundOn ? "Sound On" : "Sound Off"}
        </button>

      </div>

      {/* Information */}
      <div className="timer-info">

        <div>
          <strong>30s</strong>
          <span>Notification</span>
        </div>

        <div>
          <strong>90s</strong>
          <span>Session</span>
        </div>

        <div>
          <strong>
            {soundOn ? "ON" : "OFF"}
          </strong>
          <span>Sound</span>
        </div>

      </div>

    </div>
  );
}

export default Countdown;