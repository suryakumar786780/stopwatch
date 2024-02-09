import Clock from '../../assets/clock.png'

const ClockComp = () => {
  return (
    <div className="my-10 flex justify-center">
      <img src={Clock} alt='clock' width={100} height={100}/>
    </div>
  )
}

export default ClockComp