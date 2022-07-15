import logo from './logo.svg';
import {useState, useEffect } from 'react'
import './App.css';

function App() {
  
const timeInMinutes = new URLSearchParams(window.location.search).get('time');

const[timer,setTimer] = useState(0)

function addTextToBody() {
  return (
    <div>
      You have selected {timer} minutes of timer
      {timer}
    </div>
    )
}



useEffect(()=> {
  if (timeInMinutes) {
    addTextToBody()
  }
},[])

useEffect(() => {
  if (timeInMinutes) {
    setTimer(timeInMinutes) 
    CountDown()
  } 
},[])

const CountDown = (timeInMinutes) => {
  const ticktock = setInterval(
    () => {setTimer(prev => prev--)
    if (timer == 0) {
      clearInterval(ticktock)
    }},
    1000
  )
} 
 
return (
    <div className="App">    <h1>Timings!</h1>

      {!timer ?
      <form action=""
        id="time-form">
        <label for="time">How long do you want? (Minutes)</label>

        <input type="number"
            name="time"
            id="time" />

        <button type="submit">Submit</button>
    </form>
  :addTextToBody()  
  }

    </div>
  );
}

export default App;
