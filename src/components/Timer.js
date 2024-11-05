// components/Timer.js
import { useState, useEffect } from 'react';

const Timer = ({ timeLimit, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(timeLimit);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onTimeUp();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLimit, onTimeUp]);

    return (
        <div className="text-2xl font-semibold text-[#005DAA]">
            {`00:${timeLeft < 10 ? '0' : ''}${timeLeft}`}
        </div>
    );
};

export default Timer;
