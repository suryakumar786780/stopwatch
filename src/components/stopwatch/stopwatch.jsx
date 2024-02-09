import ClockComp from "../clock/clock"
import ParagraphComp from "../paragraph/paragraph"
import TimerComp from "../timer/timer"

const Stopwatch = () => {
    return (
        <div className='flex justify-center items-center min-h-[54rem]'>
            <div className="header min-h-[45rem]  w-1/3 text-center border border-indigo-600 bg-[#343370] p-10 shadow-lg shadow-indigo-500/50">
                <ParagraphComp styles={'text-xl font-bold tracking-widest'} value={'STOPWATCH'} />
                <ClockComp />
                <TimerComp />
            </div>
        </div>
    )
}

export default Stopwatch