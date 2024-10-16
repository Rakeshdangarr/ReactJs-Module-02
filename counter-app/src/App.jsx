import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='wraper'>
    
      <div className="card">
      <h1> Counter App</h1>
        <h1>{count}</h1>
        <br />
        <button className='Incrementbtn' onClick={() => setCount((count) => count + 1)}>Increment
        </button><span>&nbsp;&nbsp;</span>
        <button className='Decrementbtn' onClick={() => setCount((count) => count - 1)}>Decrement
        </button>
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      </div>
    </>
  )
}

export default App
