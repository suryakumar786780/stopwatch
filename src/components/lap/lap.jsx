const LapComp = ({ lap }) => {
    const l = lap;
    return (
        <div className={`lap text-white w-full max-h-60 ${l.length > 7 && 'overflow-y-scroll'}`}>
            {
                l.length > 0 && l.map((e, index) => {
                    return <div key={index} className='text-lg w-full font-bold tracking-widest my-1 flex justify-between'>
                        <p>Lap {index + 1}</p>
                        <p className="me-5">
                            {`${lap[index][0] < 10 ? `0${lap[index][0]}` : lap[index][0]}:${lap[index][1] < 10 ? `0${lap[index][1]}` : lap[index][1]}.${lap[index][2] < 10 ? `0${lap[index][2]}` : lap[index][2]}`}
                        </p>
                    </div>
                })
            }
        </div>
    )
}

export default LapComp