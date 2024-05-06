import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToolTip from './Tooltip'

function App() {
  const [direction,setDirection] = useState("top")
  return (
    <>
     <div className='buttonContainer'>
        <button className={direction === "top" ? "active" : ""} onClick={() => setDirection("top")}>Top</button>
        <button className={direction === "bottom" ? "active" : ""} onClick={() => setDirection("bottom")}>Bottom</button>
        <button className={direction === "right" ? "active" : ""} onClick={() => setDirection("right")}>Right</button>
        <button className={direction === "left" ? "active" : ""} onClick={() => setDirection("left")}>Left</button>
      </div>
      <ToolTip direction={direction} message="Message should be in one line" />
    </>
  )
}




export default App
