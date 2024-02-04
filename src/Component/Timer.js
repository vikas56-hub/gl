import React, { useState, useEffect } from 'react';

function Timer() {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = new Date('March 15, 2024 00:00:00');
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='timer row justify-content-center'>
            <div className='timer'>
                <div>
                    <p>{timeLeft.days.toString().padStart(2, '0')}</p>
                    <h2><span>Days</span></h2>
                </div>
                <div>
                    <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
                    <h2><span>Hours</span></h2>
                </div>
                <div>
                    <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
                    <h2><span>Minutes</span></h2>
                </div>
                <div>
                    <p>{timeLeft.seconds.toString().padStart(2, '0')}</p>
                    <h2><span>Seconds</span></h2>
                </div>
            </div>
        </div>






    );
}

export default Timer;
