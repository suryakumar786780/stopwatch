import { useState, lazy, Suspense } from "react";
import LapComp from "../lap/lap";

import Lap from '../../assets/add.png'

const TimerFunc = lazy(() => import("../timerfunc/timerfunc"));
const ButtonComp = lazy(() => import('../button/button'));
const DisplayTime = lazy(() => import('../displaytime'));

const TimerComp = () => {

    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(false);
    const [timer, setTimer] = useState([0, 0, 0]);
    const [lap, setLap] = useState([]);

    const resetTimer = () => {
        setStart(false);
        setPause(false);
        setTimer([0, 0, 0]);
        lap.length = 0;
    }

    const startTimer = () => {
        setStart(true);
    }

    const pauseTimer = () => {
        setStart(false);
        setPause(true);
    }

    const addLap = () => {
        setLap((p) => ([
            ...p,
            timer
        ]));
    }

    const resumeTimer = () => {
        setPause(false);
        setStart(true);
    }

    return (
        <>
            <Suspense >
                {
                    start
                        ? <TimerFunc timer={timer} settimer={setTimer} />
                        : timer[2] > 0
                            ? <DisplayTime timer={timer} />
                            : <div className='text-6xl font-bold tracking-widest my-10'>00:00.00</div>
                }

                <div className="flex justify-around">
                    {
                        pause && <ButtonComp styles={'px-10 py-3 text-sm font-bold rounded-full text-black bg-white'} value={'RESET'} onclick={resetTimer} />
                    }
                    {
                        start &&
                        <img width={50} height={50} src={Lap} alt="add lap" className="cursor-pointer" onClick={addLap} />
                    }
                    {
                        start
                            ? <ButtonComp styles={'px-10 py-3 text-sm font-bold rounded-full text-black bg-[#F1FF3C]'} value={'PAUSE'} onclick={pauseTimer} />
                            : pause
                                ? <ButtonComp styles={'px-10 py-3 text-sm font-bold rounded-full text-black bg-[#F1FF3C]'} value={'RESUME'} onclick={resumeTimer} />
                                : <ButtonComp styles={'px-10 py-3 text-sm font-bold rounded-full text-black bg-[#F1FF3C]'} value={'START'} onclick={startTimer} />
                    }
                </div>
                <div className="flex w-3/4 m-auto mt-10">
                    <LapComp lap={lap} />
                </div>
            </Suspense>
        </>
    )
}

export default TimerComp