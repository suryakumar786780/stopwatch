const DisplayTime = ({timer}) => {
    
  return (
    <div className='text-6xl font-bold tracking-widest my-10'>{`${timer[0] < 10 ? `0${timer[0]}` : timer[0]}:${timer[1] < 10 ? `0${timer[1]}` : timer[1]}.${timer[2] < 10 ? `0${timer[2]}` : timer[2]}`}</div>
  )
}

export default DisplayTime