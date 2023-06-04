import React, { useState, useEffect } from 'react';

function App() {
  const [countdown, setCountdown] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const input = parseInt(event.target.value);
      const countdownTime = isNaN(input) ? 0 : Math.floor(input);
      setCountdown(countdownTime);
      event.target.value = '';
    }
  };

  useEffect(() => {
    let intervalId;

    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [countdown]);

  return (
    <div>
      <label htmlFor="timeCount">Enter Countdown Time (in seconds): </label>
      <input type="text" id="timeCount" onKeyDown={handleKeyDown} />
      <div id="current-time">{countdown}</div>
    </div>
  );
}

export default App;
