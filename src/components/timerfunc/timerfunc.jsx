import { lazy, useEffect, useState } from "react";

const DisplayTime = lazy(() => import('../displaytime'))

const TimerFunc = ({ timer, settimer }) => {
    const [millisec, setMilliSec] = useState(timer[2]);
    const [sec, setSec] = useState(timer[1]);
    const [min, setMin] = useState(timer[0]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (millisec === 99) {
                setMilliSec(0)
                setSec(sec + 1);
            } else {
                setMilliSec(millisec + 1)
            }
            if (sec === 59) {
                setSec(0);
                setMin(min + 1);
            }
        }, 10);
        settimer([min,sec,millisec]);
        return () => clearInterval(timer)
    }, [millisec])
    return (
        <DisplayTime timer={[min,sec,millisec]}/>
    )
}

export default TimerFunc