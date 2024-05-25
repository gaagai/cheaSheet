import React, { useRef, useEffect } from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" />;
};

export default InputFocus;
 //***//
// Mutable value:
import React, { useRef } from 'react';

const Timer = () => {
    const timerRef = useRef(0);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            console.log('Timer running...');
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
    };

    return (
        <div>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    );
};

export default Timer;
