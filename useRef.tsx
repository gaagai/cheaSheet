import React, { useRef, useEffect } from 'react';

const InputFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

export default InputFocus;

 //***//
// Mutable value:
import React, { useRef } from 'react';

const Timer: React.FC = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log('Timer running...');
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default Timer;
