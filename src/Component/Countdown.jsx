import { useState, useEffect } from "react";

function Countdown() {
  const [seconds, setSeconds] = useState(10);
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

  return (
    <div>
      <h1>Countdown: {seconds}</h1>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>
    </div>
  );
}

export default Countdown;