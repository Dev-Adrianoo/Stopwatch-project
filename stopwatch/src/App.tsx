import { useState } from 'react'
import "./styles/index.css"
import image from "./assets/stopwatch-timer-stroke-icon-stopwatch-by-Vexels.png"


const App = () => {

  const [number, setNumber] = useState<number>(0);

  const [intervalId, setIntervalId] = useState<number | null>(null)


  const GoStopwatch = () => {
    if(!intervalId){
     const id = setInterval(() => {
        setNumber((prevNumber => prevNumber + 1))
      },1000);
      setIntervalId(id)
    }
  }

  const STOPstopwatch = () => {
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  const Clearstopwatch = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setNumber(0)
  }

  return (
    <main className='container'>
      <section className='stopwatch'>
      <img className='image' src={image} alt="" />
      <a className='Timer'>{number}</a>
      </section>

      <section className='divBtn'>
      <a className='btnStyle' onClick={GoStopwatch}>GO!</a>
      <a className='btnStyle' onClick={STOPstopwatch}>STOP</a>
      <a className="btnStyle" onClick={Clearstopwatch}>CLEAR</a>
      </section>
    </main>
  )
}

export default App
