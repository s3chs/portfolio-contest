import { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(getFormattedTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getFormattedTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function getFormattedTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        return (
            <>
                <span>{hours}:</span>
                <span className='overlay-minutes'>{minutes}</span>
            </>
        );
    }

    return getFormattedTime();
};

export default Clock;
