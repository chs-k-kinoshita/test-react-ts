import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttonClass =
    "bg-green-300 hover:bg-green-400 text-gray-900 px-4 py-2 rounded cursor-pointer transition-colors"

  return (
    <>
      <div className="flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {count}</p>
        <div className="flex gap-3 justify-center">
          <button
            className={buttonClass}
            onClick={() => setCount((count) => count + 1)}
          >
            increment
          </button>
          <button
            className={buttonClass}
            onClick={() => setCount((count) => count - 1)}
          >
            decrement
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
